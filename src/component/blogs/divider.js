import React, {
    useCallback, useLayoutEffect,
    useEffect, useState, useContext
} from 'react'

import { BlogContext } from '../../App'


export default function Divider({ node, ...props }) {
    const [className, setClassName] = useState("")
    const [isChanged, setIsChanged] = useState(false)

    const blogContainer = useContext(BlogContext);

    const getClassName = useCallback(() => {
        const containerWidth = blogContainer.current.clientWidth;
        if (containerWidth >= 960) {
            setClassName("large");
        } else if (containerWidth >= 810) {
            setClassName("median");
        } else if (containerWidth >= 460) {
            setClassName("small");
        } else if (containerWidth >= 340) {
            setClassName("tiny");
        } else setClassName("")
    }, [blogContainer])

    /* only window has the resize event */
    useEffect(() => {
        const toggle = () => setIsChanged(e => !e);
        window.addEventListener('resize', toggle);
        return () => {
            window.removeEventListener('resize', toggle);
        }
    }, [])

    /* every time `isChanged` is toggled, get className again */
    useLayoutEffect(() => {
        getClassName()
    }, [getClassName, isChanged])

    return (
        <hr className={className} {...props} />
    )
}
