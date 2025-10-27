import React from "react";
import SectionHeading from "../SectionHeading";
import AboutWrapper from "./AboutWrapper";

const About = () => {
    return(
        <AboutWrapper>
            <SectionHeading align="left" content="Nice To Meet You" />

            <p>Hi, I'm Ansel. I'm a self-taught, detail-oriented senior engineer based out of Kirkland, Washington. I've been tinkering with websites for over two decades now and have been putting my code to work professionally for years. I build clean, coherent, accessible websites and apps to respond to the needs of organizations of all sizes and specialties.</p>

            <p>Outside of code I have a love of traveling and a passion to explore and look forward to plenty of years of traveling the globe. I spend my weekends wandering the city walking for miles, taking a roadtrip to a forest trail, gaming on my PC, or toying with code on the couch.</p>

            <p>Follow along below to get a better understanding of the tools and skills I employ, as well as some of the projects I've worked on in the past.</p>
        </AboutWrapper>
    )
}

export default About;