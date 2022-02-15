import React from "react";
import jc from "./jc.png";

const aboutMediumURL =
    "https://medium.com/@jon-cundiff/my-journey-from-programming-enthusiast-to-becoming-a-career-developer-ed486393fba5";

const About = () => {
    return (
        <>
            <div className="container-center">
                <div className="about info">
                    <h1>About Jon</h1>
                    <p>
                        Hi! I'm Jon Cundiff. I am a full stack web developer. I
                        do most of my work in JavaScript and Node.js. I married
                        my wife in July 2021 and we live in central Missouri
                        with our 2 dogs (Tux the Boston Terrier, and Nickels the
                        mix of every breed), and our 3 cats (Smudge, Spud, Sis).
                        I love having the opportunity to take real world tools
                        and converting them into virtual replicas. With the
                        advancement in technology and programming, we no longer
                        need that physical calendar or log book or hours of
                        searching through physical documents to get the
                        information we need. We no longer need to spend time on
                        multiple communication avenues to coordinate the best
                        time for a meeting.
                    </p>
                    <p>
                        Read more about my programming journey on{" "}
                        <a
                            href={aboutMediumURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Medium
                        </a>
                        !
                    </p>

                    <img src={jc} alt="Jon Cundiff Chibi" />
                </div>
            </div>
        </>
    );
};

export default About;
