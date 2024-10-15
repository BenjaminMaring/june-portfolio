import React from "react";
import './css/Hero.css'
import Sidebar from './Sidebar'

function Hero() {
    return (
        <div className="hero-wrapper">
            <h5>Hello, my name is </h5>
            <h1><span data-string="Benjamin" className="delay-one">Benjamin</span> <span data-string="Maring" className="delay-two">Maring</span></h1>
            {/* <h1><span data-string="Software" className="delay-three">Software</span> <span data-string="Engineer" className="delay-four">Engineer</span></h1> */}
            <h6 className="hero--sub">Currently I am working as an MSP technician at <a className="hero-bvt" href="https://www.rj-pro.net">RJ Pro Tech Group Inc</a>,
                                      doing a wide variety of tasks including help desk, website managemant, and scripting.</h6>
            <button className="hero-button" onClick={() => {}}>Contact</button>
            {/* <Sidebar /> */}
        </div>
    );
}

export default Hero;