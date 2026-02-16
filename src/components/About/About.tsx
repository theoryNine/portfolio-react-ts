import React from "react"
import SectionHeading from "../SectionHeading"
import AboutWrapper from "./AboutWrapper"

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <SectionHeading align="left" content="Nice To Meet You" />

      <p>
        Hi, I'm Ansel! I'm a Technical Program Manager and engineering leader
        with 11+ years building and scaling enterprise web experiences serving
        30M+ monthly visits.
      </p>
      <p>
        I have a proven track record leading cross‑functional teams through
        complex migrations and re‑platforming initiatives, mentoring engineers,
        and partnering with product and design to deliver measurable business
        outcomes. I come with deep expertise in front‑end architecture,
        accessibility, and performance, with hands-on experience introducing
        responsible AI practices into modern development workflows, improving
        developer productivity and quality for distributed teams.
      </p>
      <p>
        Outside work: chasing new destinations, gaming, and wherever adventure
        takes me.
      </p>
    </AboutWrapper>
  )
}

export default About
