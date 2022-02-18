import React from "react";

import ResumeSection from "./ResumeSection";
import Experience from "./Experience";
import Education from "./Education";

import experiences from "./Experiences.json";
import educations from "./Educations.json";
import "./Resume.css";

const Resume = () => {
    const experienceItems = experiences.map((experience) => (
        <Experience experience={experience} key={experience.id} />
    ));

    const educationItems = educations.map((education) => (
        <Education education={education} key={education.id} />
    ));

    return (
        <div className="container">
            <h1 className="title pull-ahead">Resume</h1>
            <p>
                <a href="/pdf/Jon_Cundiff.pdf">PDF Resume</a>
            </p>
            <div className="resume-container pull-ahead">
                <ResumeSection title="Experience">
                    {experienceItems}
                </ResumeSection>
                <ResumeSection title="Education">
                    {educationItems}
                </ResumeSection>
            </div>
        </div>
    );
};

export default Resume;
