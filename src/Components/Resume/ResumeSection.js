import React from "react";

const ResumeSection = ({ title, children }) => {
    return (
        <div className="resume-col">
            <h2 className="subtitle section-heading">{title}</h2>
            {children}
        </div>
    );
};

export default ResumeSection;
