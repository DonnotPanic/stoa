import React from 'react'

import Toc from './toc'
import './sidebar.styl'

export default function Sidebar() {


    return (
        <div className="sidebar">
            <span className='content'>CONTENT</span>
            <Toc />
        </div>
    )
}
