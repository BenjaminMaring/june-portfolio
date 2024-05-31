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
                    Hello, as mentioned above my name is Benjamin Maring, a full stack software developer. Currently I am sharpening my skills as a developer at Bay Valley Tech through their internship program. I started coding in college at CSU Stanislaus, and have since graduated with a bachelors in computer science. <br></br><br></br>When I am not coding, you can find me either at the gym, hanging out with friends, or playing video games. I also really enjoy playing tennis, and have recently picked up pickleball with friends. Im not on social media much, but Id love to connect with you. You can find my contact info <a href="#contact">Here</a>.  
                </p>
            </div>
        </div>
    )
}