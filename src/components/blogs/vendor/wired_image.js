import React from 'react'
import 'wired-image'
import Zmage from 'react-zmage'
import './wired_image.css'

export default function WiredStyleImage({ node, src, alt, ...props }) {
    const zoomIn = () => Zmage.browsing({src, alt});
    return (
        <span className="image-container">
            <wired-image onClick={zoomIn} class="blog-img" elevation="3" src={src} alt={alt} {...props}> </wired-image>
        </span>
    )
}
