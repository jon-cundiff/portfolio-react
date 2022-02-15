import React from "react";

const MediaLinks = ({ links }) => {
    const linkItems = links.map((link) => (
        <a
            href={link.url}
            className="contact-link"
            target="_blank"
            rel="noreferrer"
        >
            <i className={link.faClass}></i>
        </a>
    ));

    return <div className="mediaLinks">{linkItems}</div>;
};

export default MediaLinks;
