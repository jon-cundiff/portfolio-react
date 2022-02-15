import React from "react";
import Project from "./Project";

import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Wordle Clash",
            description:
                "Classic game Wordle with a competitive twist! Backend group project with two other groupmates.",
            git: "https://github.com/jon-cundiff/wordle-clash",
            live: "https://wordle-clash.herokuapp.com/",
            technologies: [
                "Javascript",
                "Node.js",
                "Expressjs",
                "Socket.IO",
                "PostreSQL",
                "Sequelize",
                "HTML",
                "CSS",
            ],
            roles: [
                "Implemented game logic via Socket.IO events",
                "Crafted CSS related to game animations",
                "Created DB migrations for solo and match stats",
            ],
        },
        {
            title: "Aural Connectors",
            description:
                "Users are provided with an immersive planning experience while locating concerts nearby, including finding nearby lodging and restaurants.",
            git: "https://github.com/jon-cundiff/aural_connectors",
            live: "https://aural-connectors.surge.sh/",
            technologies: [
                "Javascript",
                "HTML",
                "CSS",
                "Ticketmaster Discovery API",
                "Google Places API",
            ],
            roles: [
                "Project structure and direction",
                "Programmed dynamic imports of header and footer template HTML",
                "Implemented base search actions and displays",
                "Unified CSS styling across all pages",
            ],
        },
    ];
    return (
        <div className="container">
            <h1 className="projects-title">Featured Projects</h1>
            <div className="projects">
                {projects.map((project) => (
                    <Project {...project} key={project.title} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
