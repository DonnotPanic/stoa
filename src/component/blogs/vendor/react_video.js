import React from 'react'

import './react_video.css'

export default function StyleVideo({node, ...props}) {
    return (
        <span className="blog-video">
            <video {...props} />
        </span>
    )
}
