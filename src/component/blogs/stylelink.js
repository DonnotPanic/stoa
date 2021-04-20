import React from 'react'
import './stylelink.css'

export default function StyleLink({ href, title, children }) {
    return (
        <span className="link-span">
            <a href={href} title={title}>
                {children}
            </a>
        </span>
    )
}
