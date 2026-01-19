import React from "react";
import styled from "styled-components";
import Starfield from "../Starfield";
import Background from "./Background";
import MainContent from "./MainContent";

const HeroContainer = styled.div`
  border-bottom: 1px solid var(--fireTeal);
  border-top: 1px solid var(--fireTeal);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: hidden;
  transition: 2s ease-in-out transform, 2s ease-in-out opacity;
  transform: translateY(-20px);
  opacity: 0;
  z-index: 2;

  @media (min-width: 3000px) {
    height: 900px;
  }

  &:hover {
    img {
      transform: translateY(-50px);
    }
  }

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }
`

const Hero: React.FC = () => {
    return (
        <HeroContainer className='animate'>
          <Background />
          <Starfield />
          <MainContent />
        </HeroContainer>
    )
}

export default Hero;