import React from "react";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper";
import SectionSubHeading from "../SectionSubHeading";

const SkillCardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 767px) {
        display: inline-block;
    }
`

const Skills: React.FC = () => {
    return(
        <SectionWrapper>
            <SectionHeading align="center" content="My Skillset" />
            <SectionSubHeading align="center" content="Front-End and Full-Stack" />
            <SkillCardGrid>
                <SkillCard toolName="HTML/CSS/JavaScript/TypeScript" />
                <SkillCard toolName="React" />
                <SkillCard toolName="Next.js" />
                <SkillCard toolName="Astro & Starwind UI" />
                <SkillCard toolName="Zustand" />
                <SkillCard toolName="Redux" />
                <SkillCard toolName="Tanstack" />
                <SkillCard toolName="GraphQL" />
                <SkillCard toolName="SASS/Emotion/vanilla-extract" />
                <SkillCard toolName="Node.js" />
                <SkillCard toolName="Adobe Experience Manager" />
                <SkillCard toolName="Azure DevOps" />
                <SkillCard toolName="a11y Accessibility Standards" />
                <SkillCard toolName="WCAG AA Compliance" />
                <SkillCard toolName="Jest/Cypress" />
            </SkillCardGrid>
            <SectionSubHeading align="center" content="Artificial Intelligence & Machine Learning" />
            <SkillCardGrid>
                <SkillCard toolName="Large Language Models (LLMs)" />
                <SkillCard toolName="Retrieval-Augmented Generation (RAG)" />
                <SkillCard toolName="Prompt Engineering" />
                <SkillCard toolName="LangChain" />
                <SkillCard toolName="AI-Assisted Development" />
                <SkillCard toolName="Python" />
                <SkillCard toolName="PyTorch" />
                <SkillCard toolName="AI Integration & Tooling" />
                <SkillCard toolName="Responsible AI Practices" />

            </SkillCardGrid>

        </SectionWrapper>
    )
}

export default Skills;