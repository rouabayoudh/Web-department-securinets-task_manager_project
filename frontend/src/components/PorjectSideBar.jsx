import React, { useState } from "react";
import "../assets/stylesheets/TopSideBar.css";

function ProjectSideBar() {
    const projects = [
        { name: "Mobile App", color: "#7bc554" },
        { name: "Website Redesign", color: "#fea501" },
        { name: "Design System", color: "#e5ccfc" },
        { name: "Wireframes", color: "#77a5eb" },
    ];
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="top-sidebar">
            <span className="project-title">MY PROJECTS</span>

            {projects.map((project, index) => (
                    <a 
                        key={`project${index}`} 
                        className={`project-button ${activeProject === index ? "active" : ""}`}  
                        href="#" 
                        onClick={() => setActiveProject(index)}
                    >
                        <div className="project-dot" style={{ backgroundColor: project.color }} />
                        <span className="project-name" aria-label={project.name}>{project.name}</span>
                    </a>    
            ))}
        </div>
    );
}

export default ProjectSideBar;
