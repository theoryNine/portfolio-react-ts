import React from "react"
import SectionHeading from "../SectionHeading"
import SectionWrapper from "../SectionWrapper"
import styled from "styled-components"

const LeadershipHead = styled.h3`
  color: var(--pureWhite);
  font-size: 1.2rem;
  font-family: "Mulish";
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`

const LeadershipList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
`

const LeadershipContent = styled.li`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 0;
  text-align: center;
`

const Leadership: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeading
        align="center"
        content="Program Management &Engineering Leadership"
      />
      <LeadershipHead>Starbucks (2022-2025) – Tech Lead</LeadershipHead>
      <LeadershipList>
        <LeadershipContent>
          Led end-to-end planning and execution of enterprise CMS re-platforming
          program for global marketing sites serving 30-40M monthly visits
        </LeadershipContent>
        <LeadershipContent>
          Owned program roadmap, sprint planning, and release coordination for
          4-engineer team, managing dependencies across multiple platform teams
        </LeadershipContent>
        <LeadershipContent>
          Drove stakeholder alignment across engineering, product, design, and
          marketing to deliver on-time launches with zero critical delays
        </LeadershipContent>
        <LeadershipContent>
          Established AI-assisted development practices and engineering tooling
          standards adopted across multiple teams
        </LeadershipContent>
      </LeadershipList>
      <LeadershipHead>Ansira (2017-2022) – Team Lead</LeadershipHead>
      <LeadershipList>
        <LeadershipContent>
          Led cross-functional delivery for 3-5 concurrent client platforms,
          coordinating front-end, back-end, QA, and design teams
        </LeadershipContent>
        <LeadershipContent>
          Owned end-to-end program planning for major CMS migrations across 6-12
          month timelines
        </LeadershipContent>
        <LeadershipContent>
          Built and scaled engineering team from 2 to 8 developers, reducing
          onboarding time by 30%
        </LeadershipContent>
        <LeadershipContent>
          Established accessibility compliance program achieving WCAG AA across
          enterprise client portfolios
        </LeadershipContent>
      </LeadershipList>
      <SectionHeading align="center" content="What Drives Me" />
      <LeadershipList>
        <LeadershipContent>
          <b>Stakeholder Alignment</b>: Translating business goals to
          engineering plans
        </LeadershipContent>
        <LeadershipContent>
          <b>Mentorship</b>: Empowering engineers to reach their full potential
        </LeadershipContent>
        <LeadershipContent>
          <b>Continuous Improvement</b>: Fostering a culture of learning and
          growth
        </LeadershipContent>
        <LeadershipContent>
          <b>Scale & Impact</b>: Leading migrations that serve millions, not
          just shipping code
        </LeadershipContent>
      </LeadershipList>
    </SectionWrapper>
  )
}

export default Leadership
