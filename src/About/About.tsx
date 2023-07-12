import React from "react";
import "./About.css"
import about from "../Images/About/About.png"

const About = () => {
    return (
        <div className = "about-container">
            <div className = "about-wrapper about-flexbox">
                <header>
                    Ava's Story
                </header>
                <img src = { about } alt = "about image"/>
                <p>
                After I was diagnosed with idiopathic scoliosis at nine years old,
                I was prescribed a back brace. In order for it to improve the curvature of my spine,
                I was instructed to wear the brace for eighteen hours a day. The idea of having to wear
                a brace for most of the day was bad enough, but when my doctor showed me examples of what the braces looked like,
                 my heart sunk. Most of the designs were garish, unstylish and unflattering. I couldn't imagine wearing any of them,
                 especially because I was entering my first year of middle school and I was afraid of being different.
                 There was not a single pattern I liked, so my mom had to choose a design for me. Needless to say,
                 I ended up not wearing the brace for the prescribed duration because I was too embarrassed to be seen with it on.
                 My scoliosis then progressed to the point where I needed surgery.
                To this day, I wonder if wearing t
                he brace for the prescribed duration would have eliminated the need for major back surgery.
                </p>
                <p>
                After speaking to other girls with back braces, I learned I was not alone.
                Many of the girls were also unhappy with the brace patterns that were available,
                and, like me, they also did not wear their braces for the prescribed duration.
                This inspired me to create emBrace, a nationwide competition to make brace patterns
                fashionable and allow others with scoliosis to express themselves with confidence.
                </p>
                <p>
                I'm so excited about the emBrace competition
                and I can't wait to see all your fantastic design submissions!
                </p>
            </div>
        </div>
    );
};

export default About;