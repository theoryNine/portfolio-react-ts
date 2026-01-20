import React, { useState } from "react"
import styled from "styled-components"

const ScreenshotContainer = styled.div`
  max-height: 200px;
  width: 300px;
  max-width: 100%;
  overflow: scroll;
  border: 1px solid var(--fireTeal);
  transition: 0.3s ease max-height, 0.3s ease width, 0.3s ease box-shadow;
  cursor: pointer;
  margin: 0.5rem;
  flex-shrink: 30px;

  &.mobile {
    width: 180px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0.5rem 0;
  }

  &:hover {
    box-shadow: 0 0 10px var(--fireTeal);
  }

  &.expanded {
    border-color: var(--neonPink);
    width: 100%;
    max-height: 900px;
    box-shadow: 0 0 10px var(--neonPink);
  }

  img {
    width: 100%;
    height: auto;
    transition: 0.5s ease all;
  }
`

type ScreenshotProps = {
  image: string
  mobile?: boolean
}

const Screenshot: React.FC<ScreenshotProps> = ({ image, mobile }) => {
  const [expanded, setExpand] = useState(false)

  return (
    <ScreenshotContainer
      className={`${expanded ? "expanded" : undefined} ${
        mobile ? "mobile" : undefined
      }`}
      onClick={() => setExpand(!expanded)}
    >
      <img src={image} alt="" />
    </ScreenshotContainer>
  )
}

export default Screenshot
