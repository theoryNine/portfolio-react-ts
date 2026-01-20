import React from "react"
import styled from "styled-components"

type HeadingProps = {
  align: string
}

type SectionHeadingProps = {
  content: string
  align: string
}

const Heading = styled.h3<HeadingProps>`
  font-family: var(--secondaryFont);
  font-size: 1.5em;
  letter-spacing: 1px;
  text-shadow: var(--text-shadow-small);
  line-height: 1.2;
  opacity: 0.9;
  color: var(--pureWhite);
  text-align: ${props => props.align};
  width: 100%;
  margin: 1rem 0 1.5rem 0;

  @media (max-width: 767px) {
    font-size: 1.2em;
    text-align: center;
  }
`

const SectionSubHeading: React.FC<SectionHeadingProps> = ({
  content,
  align,
}) => {
  return <Heading align={align}>{content}</Heading>
}

export default SectionSubHeading
