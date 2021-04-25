import React, { useState, useEffect, useContext } from 'react'

import Toc from './toc'
import './sidebar.css'

export default function Sidebar() {


    return (
        <div className="sidebar">
            !!!TOC!!!
            <Toc>

            </Toc>
        </div>
    )
}
