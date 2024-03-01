import React, { useState, useEffect, useContext } from 'react'

import Toc from './toc'
import './sidebar.css'

export default function Sidebar() {


    return (
        <div className="sidebar">
            <span className='content'>CONTENT</span>
            <Toc />
        </div>
    )
}
