import React from "react";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper";

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
            <SectionHeading align="center" content="My Daily Tools" />
            <SkillCardGrid>
                <SkillCard toolName="HTML/CSS/JavaScript/TypeScript" />
                <SkillCard toolName="React" />
                <SkillCard toolName="Next.js" />
                <SkillCard toolName="Astro & Starwind UI" />
                <SkillCard toolName="Zustand" />
                <SkillCard toolName="Redux" />
                <SkillCard toolName="Tanstack Query" />
                <SkillCard toolName="Tanstack Router" />
                <SkillCard toolName="GraphQL" />
                <SkillCard toolName="SASS/Emotion/vanilla-extract" />
                <SkillCard toolName="Node.js" />
                <SkillCard toolName="Adobe Experience Manager" />
                <SkillCard toolName="Azure DevOps" />
                <SkillCard toolName="a11y Accessibility" />
                <SkillCard toolName="Jest/Cypress" />
                <SkillCard toolName="Storybook" />
                <SkillCard toolName="Python" />
                <SkillCard toolName="AI-Assisted Processes" />
            </SkillCardGrid>
        </SectionWrapper>
    )
}

export default Skills;