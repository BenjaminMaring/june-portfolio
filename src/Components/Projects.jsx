import React, { useState } from "react";
import './css/Projects.css'
import projectData from './ProjectData'

export default function Project() {
    const [project, setProject] = useState(projectData[0]);

    // swaps the current project with a new one based on an index. Projects are being stored in an array in projectsData.js and imported into projectData.
    // each project has properties for the image path, a description, a takeaway, and an array of features.
    // first grabs the element for the list, then removes the selected style from the previousouly selected project li, then adds the style to the new one. after that, it returns the new project to update the state

    function changeProject(key) {
        const ul = document.getElementById('projects-nav');
        setProject(prevProject => {
            ul.children[prevProject.key].classList.remove('projects-selected');
            ul.children[key].classList.add('projects-selected');
            return projectData[key];
        })
    }
    
    //maps through the features array to display the different features of the project
    const projectElems = project.features.map(item => <p key={item} className="projects-featured">{item}</p>);

    return (
        <div className="projects-wrapper">
            <div className="projects-info">
                <h2>Some Of The Things Ive Built</h2>
                <img className="secondary-img" src={project.url} alt={project.title} />
                <div className="projects-section">
                    <ul id="projects-nav" data-selected={project.key}>
                        <li onClick={() => {changeProject(0)}} className="projects-selected">Emenate</li>
                        <li onClick={() => {changeProject(1)}}>Temp Diff</li>
                        <li onClick={() => {changeProject(2)}}>Tens</li>
                        <li onClick={() => {changeProject(3)}}>Links Page</li>
                    </ul>
                    <div className="projects-info-desc">
                        {project.desc}
                        {project.learned}
                    </div>
                    <div className="projects-features">{projectElems}</div>
                </div>
            </div>
            <div className="projects-img-md projects-img-wrapper"> 
                <img className="projects-img" src={project.url} alt={project.title} />
            </div>
        </div>
    )
}
