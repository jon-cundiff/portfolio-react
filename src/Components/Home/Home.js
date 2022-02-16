import React from "react";

import jon from "./jon.jpeg";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="container-center">
                <div className="info">
                    <h1 className="title">I am Jon Cundiff</h1>
                    <h2 className="subtitle">Full Stack Developer</h2>
                    <p>
                        I am a software developer that enjoys learning new
                        technologies and push them to the limits.
                    </p>
                    <p>
                        I develop most apps using Javascript or Python, but I
                        like to indulge in trying to do the same projects in
                        other programming languages, including Dart and Flutter
                        for cross-platform mobile app development with near
                        native performance, Java, and C#. Once syntax is down,
                        the good practices and patterns to follow tend to be a
                        consistent denominator.
                    </p>
                </div>
                <div className="image">
                    <img src={jon} alt="Jon Cundiff" />
                </div>
            </div>
        </div>
    );
};

export default Home;
