import React, { useLayoutEffect, useMemo, useState } from 'react'
import ReactPlayer from 'react-player'
import './react_video.css'

export default function StyleVideo({ node, src, type, children, ...props }) {
    const [url, setUrl] = useState([]);

    const computed_url = useMemo(() => {
        let url = [];
        if (src) url.push({ src, type });
        children.slice(1).forEach(e => {
            if (typeof (e) !== "string") {
                url.push({ src: e.props.src, type: e.props.type });
            }
        })
        return url;
    }, [src, type, children])

    useLayoutEffect(() => {
        setUrl(computed_url);
    }, [computed_url])

    return (
        <ReactPlayer
            className="blog-video" url={url}
            width='100%' height='100%'
            {...props}
        />
    )
}
