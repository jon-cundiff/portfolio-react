import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es";

const Bars = ({ bottom }) => {
    const bars = new Array(40).fill(".");
    const barsSecondaryClass = bottom ? "bars-bottom" : "bars-top";

    useEffect(() => {
        anime({
            targets: ".bar",
            backgroundColor: () => {
                let randR = Math.floor(Math.random() * 55) + 200;
                let randG = Math.floor(Math.random() * 160) + 20;
                let randB = Math.floor(Math.random() * 160) + 20;
                return `rgba(${randR}, ${randG}, ${randB}, .08)`;
            },
            // translateY: () => anime.random(-100, -600),
            // rotate: "1turn",
            height: () => {
                let randomPx = Math.floor(Math.random() * 400) + 100;
                return `${randomPx}px`;
            },
            duration: 500,
            loop: true,
            direction: "alternate",
            delay: () => anime.random(0, 900),
        });

        return () => {
            anime.remove(".bar");
        };
    }, []);

    return (
        <div className={`bars ${barsSecondaryClass}`}>
            {bars.map((bar, i) => (
                <div className="bar" key={i}></div>
            ))}
        </div>
    );
};

export default Bars;
