import React from "react";
import MediaLinks from "./MediaLinks";

import "./Contact.css";

const Contact = () => {
    const links = [
        {
            faClass: "fa-brands fa-linkedin",
            url: "https://www.linkedin.com/in/jon-cundiff/",
        },
        {
            faClass: "fa-solid fa-envelope",
            url: "mailto:jon.cundiff@gmail.com",
        },
        {
            faClass: "fa-brands fa-github",
            url: "https://github.com/jon-cundiff",
        },
    ];

    return (
        <>
            <div className="container-center">
                <div className="about info">
                    <h1>Connect with me!</h1>
                    <p>
                        Thank you for taking the time to explore my site. Feel
                        free to connect with me via any of the methods below to
                        learn more!
                    </p>
                    <MediaLinks links={links} />
                    <p className="phone-line">
                        <i className="fa-solid fa-square-phone"></i>
                        <span className="phone">573.723.1487</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Contact;
