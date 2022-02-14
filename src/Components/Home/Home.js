import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es";

import jon from "./jon.jpeg";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        anime({
            targets: ".bar",
            backgroundColor: () => {
                let randR = Math.floor(Math.random() * 55) + 200;
                let randG = Math.floor(Math.random() * 90);
                let randB = Math.floor(Math.random() * 90);
                return `rgba(${randR}, ${randG}, ${randB}, .1)`;
            },
            // translateY: () => anime.random(-100, -600),
            // rotate: "1turn",
            height: () => {
                let randomPx = Math.floor(Math.random() * 400) + 100;
                return `${randomPx}px`;
            },
            duration: 800,
            loop: true,
            direction: "alternate",
            delay: () => anime.random(0, 900),
        });

        return () => {
            anime.remove(".bar");
        };
    }, []);
    return (
        <>
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
                        most practices and patterns tends to be a consistent
                        denominator.
                    </p>
                </div>
                <div className="image">
                    <img src={jon} alt="Jon Cundiff" />
                </div>
            </div>
            <div className="bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </>
    );
};

export default Home;
