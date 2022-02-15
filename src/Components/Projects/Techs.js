import React from "react";

const Techs = ({ techs }) => {
    const techItems = techs.map((tech) => (
        <li key={tech} className="tech">
            {tech}
        </li>
    ));

    return <ul className="techs">{techItems}</ul>;
};

export default Techs;
