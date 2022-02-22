import React from "react";
import NavItem from "./NavItem";

import "./Nav.css";
// Home, About, Portfolio, Contact, Skills, Articles
const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <NavItem title="Home" icon="house-chimney" link="/" />
                <NavItem title="About" icon="user-tie" link="/about" />
                <NavItem title="Projects" icon="code-merge" link="/projects" />
                <NavItem title="Skills" icon="code" link="/skills" />
                <NavItem title="Resume" icon="file" link="/resume" />
                <NavItem title="Articles" icon="newspaper" link="/articles" />
                <NavItem title="Contact" icon="address-card" link="/contact" />
            </div>
        </nav>
    );
};

export default Nav;
