import React from "react";

const MediaLinks = ({ links }) => {
    const linkItems = links.map((link, index) => (
        <a
            href={link.url}
            className="contact-link"
            target="_blank"
            rel="noreferrer"
            key={index}
        >
            <i className={link.faClass}></i>
        </a>
    ));

    return <div className="mediaLinks">{linkItems}</div>;
};

export default MediaLinks;
