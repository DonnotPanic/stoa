import React, {
    useLayoutEffect,
    useCallback,
    useState,
    useRef,
    useContext
} from 'react'

import { BlogContext } from '../../App'
import Nav from './nav'
import Searchbar from './searchbar'
import Toggler from './toggler'
import './header.css'


export default function Header() {
    const [scrollStyle, setScrollStyle] = useState("");
    const [prevTop, setPrevTop] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(true);
    const [title, setTitle] = useState("");

    const header = useRef();
    /* get the ref of blog from App */
    const blogContainer = useContext(BlogContext);

    const headerScrolling = useCallback((e) => {
        if (!blogContainer.current) return;
        let top = e.target.documentElement.scrollTop;
        const height = header.current.clientHeight;
        const offset = blogContainer.current.offsetTop;
        if (top + height >= offset) {
            setScrollStyle(" scrolling-header");
        } else {
            setScrollStyle("");
        }
    }, [blogContainer]
    )

    const showTitle = useCallback((e) => {
        if (!blogContainer.current) return;
        let top = e.target.documentElement.scrollTop;
        let query = blogContainer.current.children[0];
        if (Math.abs(prevTop - top) < 100) return;
        if (prevTop < top) {
            setScrollingDown(true);
        } else if (prevTop > top) {
            if (!title) {
                setTitle(query.innerText);
            }
            setScrollingDown(false);
        }
        if (top < query.offsetTop + query.clientHeight) {
            setScrollingDown(true);
        }
        setPrevTop(e.target.documentElement.scrollTop);
    }, [prevTop, blogContainer, title]
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
            <div ref={header} id="header" className={scrollStyle}>
                {
                    scrollingDown
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
}