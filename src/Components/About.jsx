import React from "react";
import './css/About.css'

export default function About() {

    return (
        <div className="about--wrapper">
            <div className="about--title-wrapper">
                Get To Know Me
            </div>
            <div className="about--inner-wrapper">
                <div className="about--profile-wrapper">
                    <img className="about--profile" src="./public/profile.jpg"></img>
                </div>
                <p>
                    Hello, as mentioned above my name is Benjamin Maring. I have been working as an MSP technitian for a little over two years now, which I started while I was in college. 
                    I graduated from CSU Stanislaus in 2022 with a degree in computer science, where I developed my interest in computers. 
                    <br></br><br></br>
                    I am constantly trying to learn new things, wether it is just for a hobby or for a career. Currently I am trying to get a CompTIA A+ certificate. 
                    I have also built some pretty interesting web applications which can be found below.
                </p>
            </div>
        </div>
    )
}