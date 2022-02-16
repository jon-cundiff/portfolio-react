import React from "react";

const Experience = ({ experience }) => {
    const { role, employer, location, description, achievements, dateRange } =
        experience;
    const achievementItems = achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
    ));

    return (
        <div className="experience">
            <h3 className="info-heading">{role}</h3>
            <h4 className="info-heading employer">{employer}</h4>
            <p className="info-heading">{location}</p>
            <h5 className="info-heading">
                <i>{dateRange}</i>
            </h5>
            <p>{description}</p>
            <ul>{achievementItems}</ul>
        </div>
    );
};

export default Experience;
