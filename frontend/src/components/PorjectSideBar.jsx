import React, { useState } from "react";
import "../assets/stylesheets/TopSideBar.css";
import plus from "../assets/images/plus.png";

function ProjectSideBar() {
    const projects = [
        { name: "Mobile App", color: "#7bc554" },
        { name: "Website Redesign", color: "#fea501" },
        { name: "Design System", color: "#e5ccfc" },
        { name: "Wireframes", color: "#77a5eb" },
    ];
    const [activeProject, setActiveProject] = useState(null);
    const [showAddProject, setShowAddProject] = useState(false);
    function openAddProjectForm() { setShowAddProject(true);}
    return (
        <div className="top-sidebar">
            <div className="projects-header">
                <span className="project-title">MY PROJECTS</span>
                <span className="add-project">
                    <img src={plus} alt="Add" onClick={openAddProjectForm} />
                </span>

            </div>
            <br/>

            {projects.map((project, index) => (
                    <a 
                        key={`project${index}`} 
                        className={`project-button ${activeProject === index ? "active" : ""}`}  
                        href="/" 
                        onClick={() => setActiveProject(index)}
                    >
                        <div className="project-dot" style={{ backgroundColor: project.color }} />
                        <span className="project-name" aria-label={project.name}>{project.name}</span>
                    </a>    
            ))}

            {showAddProject && (
                <form className="add-project-form">
                    <div className="add-container">
                        <input className="add-inp" type="text" placeholder="Enter project name" />
                        <input className="add-inp color-picker" type="color" />
                        <button className="add-inp add-btn" type="submit">Add</button>
                    </div>
                </form>

            )}
        </div>
    );
}

export default ProjectSideBar;
