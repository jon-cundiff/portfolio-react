import React from "react";

import Skill from "./Skill";

import SkillsJson from "./Skills.json";
import "./Skills.css";
import Tool from "./Tool";

const Skills = () => {
    const { core, versionControl, database, collaborative, learning } =
        SkillsJson;
    const coreSkillItems = core.map((skill) => (
        <Skill key={skill.name} skill={skill} />
    ));

    const learningSkillItems = learning.map((skill) => (
        <Skill key={skill.name} skill={skill} />
    ));

    const vcToolItems = versionControl.map((tool) => (
        <Tool tool={tool} key={tool} />
    ));

    const dbItems = database.map((tool) => <Tool tool={tool} key={tool} />);

    const collabItems = collaborative.map((tool) => (
        <Tool tool={tool} key={tool} />
    ));

    return (
        <div className="container">
            <h1 className="title pull-ahead">Skills</h1>
            <div className="skills-container pull-ahead">
                <p>
                    Below are the technologies used in my journey as a developer
                    so far.
                </p>
                <p>This list will continue to expand!</p>
                <div className="core-skills">{coreSkillItems}</div>
                <h3>Version Control & Development Tools</h3>
                <div className="tool-list vc-tools">{vcToolItems}</div>
                <h3>Database Tools</h3>
                <div className="tool-list db-tools">{dbItems}</div>
                <h3>Collaborative Tools</h3>
                <div className="tool-list collab-tools">{collabItems}</div>
                <h3>What I'm Learning Now</h3>
                <div className="core-skills">{learningSkillItems}</div>
            </div>
        </div>
    );
};

export default Skills;
