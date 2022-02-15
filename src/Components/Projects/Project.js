import React from "react";

import "./Project.css";
import Roles from "./Roles";
import Techs from "./Techs";

const Project = ({
    title,
    description,
    technologies,
    roles,
    images,
    git,
    live,
}) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <div className="links">
                <a
                    href={git}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href={live}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-solid fa-window-maximize"></i>
                </a>
            </div>
            <p>{description}</p>
            <h3>Technologies</h3>
            <Techs techs={technologies} />
            <h3>Responsibilities</h3>
            <Roles roles={roles} />
        </div>
    );
};

export default Project;
