import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react'
import { NavHashLink as Link } from 'react-router-hash-link'
import { List } from 'semantic-ui-react'
import { throttle } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown as faDown } from '@fortawesome/free-solid-svg-icons'

import { BlogContext } from '../../../App'
import './toc.css'

const RenderList = (props) => {
    const [prevLeaf, setPrevLeaf] = useState(null);
    const collapsed = Boolean(props.collapsed);
    const innerList = Boolean(props.innerList);

    const handleFold = (e) => () => {
        const collapsePropa = (e, val = true) => {
            while (e) {
                e.isCollapsed = val;
                e = e.parent;
            }
        }
        if (Boolean(e.children) && e === prevLeaf) {
            collapsePropa(e);
            setPrevLeaf(null);
        } else {
            collapsePropa(prevLeaf);
            collapsePropa(e, false);
            setPrevLeaf(e);
        }
    }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -document.getElementById('header').clientHeight;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        throttle(() => {
            el.classList.add("title-on-focus");
            setTimeout(() => {
                el.classList.remove("title-on-focus");
            }, 1100)
        }, 1200)();
    }

    const val = !props.list ? null : props.list.map((e, i) => (
        <List.Item key={props.prefix + String(i)} className={e.focused ? "focused" : ""}>
            <List.Content>
                <Link smooth to={{ pathname: document.location.href.split('#')[1], hash: e.innerText }}
                    scroll={el => scrollWidthOffset(el)}
                    onClick={handleFold(e)}
                    onKeyUp={k => ((k.key === "Enter") ? handleFold(e)() : null)}
                    tabIndex={collapsed ? -1 : 0}
                >
                    {decodeURI(e.innerText)}
                </Link>
                {
                    e.children
                        ? <button className={"fold-button" + (e.isCollapsed ? "flipped" : "")} tabIndex='-1' disabled>
                            <FontAwesomeIcon icon={faDown} />
                        </button> : null
                }
            </List.Content>
            <RenderList list={e.children}
                prefix={props.prefix + String(i) + "-"}
                collapsed={e.isCollapsed}
                innerList={true}
            />
        </List.Item>
    ));

    return (
        <>
            {
                innerList
                    ? <List.List className={"toc-list" + (collapsed ? " collapsed" : "")}>
                        {val}
                    </List.List>
                    :
                    <List celled ordered className={"toc-list" + (collapsed ? " collapsed" : "")}>
                        {val}
                    </List>
            }
        </>
    )
}


class ContentItem {
    constructor(v) {
        this.tagName = v.tagName;
        this.innerText = encodeURI(v.innerText);
        this.isCollapsed = true;
        this.children = null;
        this.ref = v;
        this.parent = null;
        this.focused = false;
        v.id = this.innerText;
    }
}

const deserList = (list) => {
    if (!list.length) return null;
    let stack = [];
    let ans = [];
    let top;
    for (let v of list) {
        if (!top) {
            top = new ContentItem(v);
        } else {
            while (stack.length && top.tagName >= v.tagName)
                top = stack.pop();
            if (top.tagName < v.tagName) {
                let tmp = new ContentItem(v);
                if (!top.children)
                    top.children = [];
                tmp.parent = top;
                top.children.push(tmp);
                stack.push(top);
                top = tmp;
            } else {
                ans.push(top);
                top = new ContentItem(v);
            }
        }
    }
    if (stack.length) ans.push(stack[0]);
    return ans;
}


export default function Toc() {
    const [contents, setContents] = useState([]);
    const [offsets, setOffsets] = useState([]);
    const [headOffset, setHeadOffset] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    const [focus, setFocus] = useState("");

    let blogContainer = useContext(BlogContext);

    const flatContents = useMemo(() => {
        const flatten = arr => arr.reduce((prev, cur) => {
            let ret = prev.concat(cur);
            if (cur.children) ret = ret.concat(flatten(cur.children));
            return ret;
        }, []);
        return contents ? flatten(contents) : [];
    }, [contents])

    useEffect(() => {
        let tmp = [...blogContainer.current.children]
            .filter(v => /H[2-6]/g.test(v.tagName));
        let offsets = tmp.map(e => ({ val: e.innerText, offset: e.offsetTop }));
        setOffsets(offsets);
        setContents(deserList(tmp));
        setBlogTitle(blogContainer.current.children[0].innerText);
        setHeadOffset(document.getElementById("header").clientHeight);
    }, [blogContainer]);

    const getFocus = useCallback(
        () => {
            let top = document.documentElement.scrollTop;
            let offset = top + headOffset;
            let l = 0, r = offsets.length - 1;
            while (l <= r) {
                let m = (l + r) >> 1;
                let cur = offsets[m].offset;
                if (cur === offsets) {
                    return offsets[m];
                } else if (cur < offset) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
            let ret = offsets[r];
            return ret;
        }, [headOffset, offsets]
    )

    useEffect(() => {
        const scrollCur = () => {
            let target = getFocus();
            let item = undefined;
            if (target)
                item = [...flatContents].find(e => decodeURI(e.innerText) === target.val);
            if (!item) {
                item = [...flatContents][0];
            }
            for (let v of flatContents) {
                v.isCollapsed = true;
                v.focused = false;
            }
            item.focused = true;
            let tmp = item;
            while (tmp) {
                tmp.isCollapsed = false;
                tmp = tmp.parent;
            }
            setFocus(item.innerText);
        }
        window.addEventListener('scroll', scrollCur);
        return (() => {
            window.removeEventListener('scroll', scrollCur)
        })
    })

    return (
        <div id="table-of-content">
            <button id="toc-title">
                {blogTitle}
            </button>
            {
                <RenderList list={contents} focus={focus} />
            }
        </div>
    )
}
