import React from "react";
import Project from "./Project";

import projects from "./Projects.json";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="container">
            <h1 className="title projects-title pull-ahead">
                Featured Projects
            </h1>
            <div className="projects pull-ahead">
                {projects.map((project) => (
                    <Project {...project} key={project.title} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
