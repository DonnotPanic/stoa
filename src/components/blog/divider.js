import { observer } from 'mobx-react-lite';
import React, {
    useCallback, useLayoutEffect,
    useEffect, useState
} from 'react'



 const Divider = observer(({ node, blogContainer, ...props }) => {
    const [className, setClassName] = useState("")
    const [isChanged, setIsChanged] = useState(false)


    const getClassName = useCallback(() => {
        const containerWidth = blogContainer.isReady ? blogContainer.clientWidth : 0;
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
});

export default Divider;