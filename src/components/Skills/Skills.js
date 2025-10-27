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

const Skills = () => {
    return(
        <SectionWrapper>
            <SectionHeading align="center" content="My Daily Tools" />
            <SkillCardGrid>
                <SkillCard toolName="HTML and SCSS" />
                <SkillCard toolName="JavaScript" />
                <SkillCard toolName="React" />
                <SkillCard toolName="Adobe Experience Manager" />
                <SkillCard toolName="TypeScript" />
                <SkillCard toolName="Artificial Intelligence" />
                <SkillCard toolName="SASS/LESS/Stylus" />
                <SkillCard toolName="UI Libraries (i.e. MUI)" />
                <SkillCard toolName="Styled Components" />
            </SkillCardGrid>
            <SectionHeading align="center" content="I Often Tinker With..." />
            <SkillCardGrid>
                <SkillCard toolName="Next.js" />
                <SkillCard toolName="React Native" />
                <SkillCard toolName="Wordpress" />
                <SkillCard toolName="Python" />
                <SkillCard toolName="GraphQL" />
                <SkillCard toolName="Countless JS Libraries" />
            </SkillCardGrid>
        </SectionWrapper>
    )
}

export default Skills;