import React from "react";

const Roles = ({ roles }) => {
    const roleItems = roles.map((role, index) => (
        <li className="role" key={index}>
            {role}
        </li>
    ));

    return <ul className="roles">{roleItems}</ul>;
};

export default Roles;
