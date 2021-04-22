import React, { useCallback, useLayoutEffect, useEffect, useState } from 'react'


export default function Divider({ node, ...props }) {
    const [className, setClassName] = useState("")
    const [isChanged, setIsChanged] = useState(false)

    const getClassName = useCallback(() => {
        const containerWidth = document.getElementsByClassName("blog-container")[0].clientWidth;
        if (containerWidth >= 960) {
            setClassName("large");
        } else if (containerWidth >= 770) {
            setClassName("median");
        } else if (containerWidth >= 460) {
            setClassName("small");
        } else if (containerWidth >= 340) {
            setClassName("tiny");
        }
    }, [])

    useEffect(() => {
        const toggle = () => setIsChanged(e => !e);
        window.addEventListener('resize', toggle);
        return () => {
            window.removeEventListener('resize', toggle);
        }
    }, [])

    /*-- every time `isChanged` is toggled, get className again --*/
    useLayoutEffect(() => {
        getClassName()
    }, [getClassName, isChanged])

    return (
        <hr className={className} {...props} />
    )
}
