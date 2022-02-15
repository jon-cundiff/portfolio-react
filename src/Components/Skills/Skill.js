import React from "react";

import "./Skill.css";

const Skill = ({ skill }) => {
    const { icon, name } = skill;
    const iconPath = `/images/${icon}.svg`;
    return (
        <div className="skill">
            <div className="icon">
                <img src={iconPath} alt={name} />
            </div>
            <h3>{name}</h3>
        </div>
    );
};

export default Skill;
