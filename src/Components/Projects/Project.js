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
    const imageItems = images.map((image, index) => (
        <div>
            <div className="project-image-container" key={index}>
                <img
                    src={image.link}
                    alt="Project Demo"
                    className="project-image"
                />
            </div>
            <p className="project-image-description">
                <i>{image.description}</i>
            </p>
        </div>
    ));

    return (
        <div className="project">
            <h2 className="subtitle">{title}</h2>
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
            {imageItems && <div className="project-images">{imageItems}</div>}
        </div>
    );
};

export default Project;
