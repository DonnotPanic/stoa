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
    const [scrollStyle, setScrollStyle] = useState("")

    const header = useRef();
    /* get the ref of blog from App */
    const blogContainer = useContext(BlogContext);

    const handleScroll = useCallback(
        (e) => {
            let top = e.target.documentElement.scrollTop;
            const height = header.current.clientHeight;
            const offset = blogContainer.current.offsetTop;
            console.log(top, height, offset);
            if (top + height >= offset) {
                setScrollStyle(" scrolling-header");
            } else {
                setScrollStyle("");
            }
        }, [blogContainer]
    )

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });
    }, [handleScroll])

    return (
        <>
            <div className="padding" />
            <div ref={header} id="header" className={scrollStyle}>
                <Toggler />
                <Nav />
                <Searchbar />
            </div>
        </>
    );
}