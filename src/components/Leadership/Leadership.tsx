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
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
`

const Leadership: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeading align="center" content="Engineering Leadership" />
      <LeadershipHead>Starbucks (2022-2025) – Acting Tech Lead</LeadershipHead>
      <LeadershipList>
        <LeadershipContent>
          Directed 4-engineer team through AEM re-platforming for 18-21M
          visit/mo sites
        </LeadershipContent>
        <LeadershipContent>
          Introduced AI tooling, boosting productivity across distributed teams
        </LeadershipContent>
        <LeadershipContent>
          Partnered with Product/Design/Marketing to hit release cadences
        </LeadershipContent>
      </LeadershipList>
      <LeadershipHead>Ansira (2017-2022) – Team Lead</LeadershipHead>
      <LeadershipList>
        <LeadershipContent>
          Hired/onboarded developers, established code review standards
        </LeadershipContent>
        <LeadershipContent>
          Led CMS migrations for enterprise clients, guiding juniors end-to-end
        </LeadershipContent>
        <LeadershipContent>
          Owned a11y strategy, achieving WCAG AA across client portfolios
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
