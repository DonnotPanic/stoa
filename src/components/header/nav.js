import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-bar">
            <Link to='/'>主页</Link>
            <Link to='/blogs'>博客</Link>
        </div>
    )
}
