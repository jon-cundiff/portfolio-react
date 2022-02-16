import React from "react";

const Education = ({ education }) => {
    const { school, degree, location, description, dateRange } = education;

    return (
        <div className="education">
            <h3 className="info-heading">{school}</h3>
            <h4 className="info-heading degree">{degree}</h4>
            <p className="info-heading">{location}</p>
            <h5 className="info-heading">
                <i>{dateRange}</i>
            </h5>
            {description && <p>{description}</p>}
        </div>
    );
};

export default Education;
