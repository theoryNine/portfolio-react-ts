import React from "react";
import SectionHeading from "../SectionHeading";
import AboutWrapper from "./AboutWrapper";

const About: React.FC = () => {
    return (
        <AboutWrapper>
            <SectionHeading align="left" content="Nice To Meet You" />

        <p>Hi, I'm Ansel. I'm a detail-oriented engineer based in Kirkland, Washington, specializing in building AI-powered web applications and intelligent user experiences. With over two decades of web development experience and years of professional impact, I design and ship clean, accessible interfaces paired with modern AI capabilities that solve real problems for organizations of all sizes.</p>

        <p>Today, I focus on applied AI engineering—integrating LLMs, RAG systems, and machine learning into production web applications using TypeScript, Next.js, and modern AI tooling. I'm passionate about the intersection of thoughtful product design and AI, where complex systems become intuitive experiences.</p>

        <p>Whether it's architecting full-stack SaaS platforms, building AI-assisted developer tools, or implementing intelligent features that adapt to user needs, I bring a senior engineer's rigor to emerging technology and a product mindset to every line of code.</p>
        </AboutWrapper>
    );
};

export default About;
