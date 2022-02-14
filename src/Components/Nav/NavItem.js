import React from "react";
import { useNavigate } from "react-router-dom";

import "./NavItem.css";

const NavItem = ({ title, icon, isDark, link }) => {
    const navigate = useNavigate();

    const handleNavClick = () => {
        navigate(link);
    };

    const faClass = `fa-solid fa-${icon}`;
    let iconClass = "icon-container ";
    iconClass += isDark ? "icon-dark" : "icon-light";
    return (
        <div className={iconClass} onClick={handleNavClick}>
            <i className={faClass}></i>
            <span>{title}</span>
        </div>
    );
};

export default NavItem;
