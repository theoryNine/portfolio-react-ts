import React from "react"
import SectionHeading from "../SectionHeading"
import SectionWrapper from "../SectionWrapper"
import ProjectTile from "./ProjectTile"
import { ProjectData, Project } from "./ProjectData"

const Work: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionHeading align="center" content="Some Of My Work"></SectionHeading>
      {ProjectData.map((data: Project) => {
        return (
          <ProjectTile
            title={data.title}
            background={data.background}
            screenshot1={data.screenshot1}
            screenshot1mob={data.screenshot1mob}
            screenshot2={data.screenshot2}
            screenshot2mob={data.screenshot2mob}
            screenshot3={data.screenshot3}
            screenshot3mob={data.screenshot3mob}
            liveUrl={data.liveUrl}
            role={data.role}
            description={data.description}
            stack={data.stack}
            id={data.key}
            key={data.key}
          />
        )
      })}
    </SectionWrapper>
  )
}

export default Work
