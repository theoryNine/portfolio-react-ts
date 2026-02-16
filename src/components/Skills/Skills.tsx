import React from "react"
import SectionHeading from "../SectionHeading"
import SkillCard from "./SkillCard"
import styled from "styled-components"
import SectionWrapper from "../SectionWrapper"
import SectionSubHeading from "../SectionSubHeading"

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
  return (
    <SectionWrapper>
      <SectionHeading align="center" content="My Skillset" />
      <SectionSubHeading
        align="center"
        content="Program Management & Leadership"
      />
      <SkillCardGrid>
        <SkillCard toolName="Multi-year roadmap planning" />
        <SkillCard toolName="Cross-functional coordination" />
        <SkillCard toolName="Stakeholder alignment" />
        <SkillCard toolName="Risk & dependency management" />
        <SkillCard toolName="Agile/sprint planning" />
        <SkillCard toolName="Team building & mentoring" />
      </SkillCardGrid>
      <SectionSubHeading align="center" content="Technical Expertise" />
      <SkillCardGrid>
        <SkillCard toolName="Web platform architecture" />
        <SkillCard toolName="Enterprise CMS (Adobe AEM)" />
        <SkillCard toolName="Front-end technologies (React, TypeScript, Next.js)" />
        <SkillCard toolName="Performance & accessibility (WCAG AA)" />
        <SkillCard toolName="AI-Assisted Development" />
        <SkillCard toolName="CI/CD & DevOps (Azure)" />
      </SkillCardGrid>
    </SectionWrapper>
  )
}

export default Skills
