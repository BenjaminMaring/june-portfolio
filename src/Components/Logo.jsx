import React from 'react';
import './css/Logo.css'

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <a href="#top"><img className="logo-top" alt="logo" src="./logo-top.png"/></a>
            <img alt="logo" src="./logo-bottom.png"/>
        </div>
    )
}
