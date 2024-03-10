import React, {
    useLayoutEffect,
    useCallback,
    useRef,
    useContext
} from 'react'

import { BlogContext } from '../../App'
import Nav from './nav'
import Searchbar from './searchbar'
import Toggler from './toggler'
import './header.styl'
import { makeAutoObservable } from 'mobx'


export default function Header() {
    const scroll = makeAutoObservable({style: "", prevTop: 0, isDown: true, title: ""});

    const header = useRef();
    /* get the ref of blog from App */
    const blogContainer = useContext(BlogContext);

    /* Does not rely on the value of scroll.style, only changes it. */
    const headerScrolling = useCallback((e) => {
        if (!blogContainer.current) return;
        let top = e.target.documentElement.scrollTop;
        const height = header.current.clientHeight;
        const offset = blogContainer.current.offsetTop;
        if (top + height >= offset) {
            scroll.style = " scrolling-header";
        } else {
            scroll.style = "";
        }
    }, [blogContainer])

    const showTitle = useCallback((e) => {
        if (!blogContainer.current) return;
        let top = e.target.documentElement.scrollTop;
        let query = blogContainer.current.children[0];
        if (Math.abs(scroll.prevTop - top) < 100) return;
        if (scroll.prevTop < top) {
            scroll.isDown = true;
        } else if (scroll.prevTop > top) {
            if (!scroll.title) {
                scroll.title = query.innerText;
            }
            scroll.isDown = false;
        }
        if (top < query.offsetTop + query.clientHeight) {
            scroll.isDown = true;
        }
        scroll.prevTop = e.target.documentElement.scrollTop;
    }, [scroll, blogContainer]
    )

    useLayoutEffect(() => {

        window.addEventListener('scroll', headerScrolling);
        window.addEventListener('scroll', showTitle);

        return (() => {
            window.removeEventListener('scroll', headerScrolling);
            window.removeEventListener('scroll', showTitle);
        });
    }, [headerScrolling, showTitle])

    return (
        <>
            <div className="padding" />
            <div ref={header} id="header" className={scroll.style}>
                {
                    scroll.isDown
                        ? <>
                            <Toggler />
                            <Nav />
                            <Searchbar />
                        </>
                        : <center>{scroll.title}</center>
                }
            </div>
        </>
    );
}