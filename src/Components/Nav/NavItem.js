import React from "react";
import { useNavigate } from "react-router-dom";

import "./NavItem.css";

const NavItem = ({ title, icon, link }) => {
    const navigate = useNavigate();

    const handleNavClick = () => {
        navigate(link);
    };

    const faClass = `fa-solid fa-${icon}`;
    return (
        <div className="icon-container icon-light" onClick={handleNavClick}>
            <i className={faClass}></i>
            <span>{title}</span>
        </div>
    );
};

export default NavItem;
