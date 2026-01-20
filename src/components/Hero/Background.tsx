// Component Name: Hero Background

import React from "react"
import styled, { keyframes } from "styled-components"
import heroBg from "../../images/ClippedStars.png"

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(70px);
  }
  100% {
    opacity: .7;
    transform: translateY(0);
  }
`

const HeroBackground = styled.img`
  position: absolute;
  opacity: 0.7;
  width: 900px;
  height: auto;
  display: block;
  z-index: 2;
  bottom: -90%;
  animation-name: ${fadeInUp};
  animation-duration: 4s;
  transition: 2s ease transform;
  background: var(--black);

  @media (min-width: 3000px) {
    top: auto;
    bottom: -50%;
  }
`

const Background: React.FC = () => {
  return <HeroBackground alt="" src={heroBg} />
}

export default Background
