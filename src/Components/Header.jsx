import React from 'react'
import Logo from './Logo'
import './css/Header.css'

function Header() {
    return (
        <div className="Header-wrapper" id="top">
            <Logo />
            <ul className="header-list">
                <li><a href="https://www.google.com">About</a></li>
                <li><a href="https://www.google.com">Projects</a></li>
                <li><a href="https://www.google.com">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;