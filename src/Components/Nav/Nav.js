import React from "react";
import NavItem from "./NavItem";

import "./Nav.css";
// Home, About, Portfolio, Contact, Skills, Articles
const Nav = ({ isDark }) => {
    return (
        <nav className="nav">
            <NavItem
                title="Home"
                icon="house-chimney"
                isDark={isDark}
                link="/"
            />
            <NavItem
                title="About"
                icon="user-tie"
                isDark={isDark}
                link="/about"
            />
            <NavItem
                title="Projects"
                icon="code-merge"
                isDark={isDark}
                link="/projects"
            />
            <NavItem
                title="Skills"
                icon="code"
                isDark={isDark}
                link="/skills"
            />
            <NavItem
                title="Resume"
                icon="file"
                isDark={isDark}
                link="/resume"
            />
            <NavItem
                title="Articles"
                icon="newspaper"
                isDark={isDark}
                link="/articles"
            />
            <NavItem
                title="Contact"
                icon="address-card"
                isDark={isDark}
                link="/contact"
            />
        </nav>
    );
};

export default Nav;
