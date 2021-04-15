import React from 'react'

import Nav from './nav'
import Searchbar from './searchbar'
import Toggler from './toggler'
import './header.css'

export default function Header () {
    return (
        <div className="header">
            <Toggler />
            <Nav />
            <Searchbar />
        </div>
    );
}