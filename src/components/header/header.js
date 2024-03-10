import React, {
    useLayoutEffect,
    useCallback,
    useRef,
    useState
} from 'react'

import Nav from './nav'
import Searchbar from './searchbar'
import Toggler from './toggler'
import './header.styl'
import { observer } from 'mobx-react-lite'

const Header = observer(({blogContainer}) => {

    const [style, setStyle] = useState("");
    const [prevTop, setPrevTop] = useState(0);
    const [isDown, setIsDown] = useState(true);
    const [title, setTitle] = useState("");

    const header = useRef();
    /* get the ref of blog from App */

    const headerScrolling = useCallback((e) => {
        if (!blogContainer.isReady) return;
        let top = e.target.documentElement.scrollTop;
        const height = header.current.clientHeight;
        const offset = blogContainer.offsetTop;
        if (top + height >= offset) {
            setStyle(" scrolling-header");
        } else {
            setStyle("");
        }
    }, [blogContainer])

    const showTitle = useCallback((e) => {
        if (!blogContainer.isReady) return;
        const top = e.target.documentElement.scrollTop;
        if (Math.abs(prevTop - top) < 100) return;
        let query = blogContainer.head;
        if (prevTop < top) {
            setIsDown(true);
        } else if (prevTop > top) {
            if (!title) {
                setTitle(query.innerText);
            }
            setIsDown(false);
        }
        if (top < query.offsetTop + query.clientHeight) {
            setIsDown(true);
        }
        setPrevTop(e.target.documentElement.scrollTop);
    }, [blogContainer, prevTop, title]
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
            <div ref={header} id="header" className={style}>
                {
                    isDown
                        ? <>
                            <Toggler />
                            <Nav />
                            <Searchbar />
                        </>
                        : <center>{title}</center>
                }
            </div>
        </>
    );
});

export default Header;