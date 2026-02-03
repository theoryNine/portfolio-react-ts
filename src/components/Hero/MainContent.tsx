import React from "react"
import styled from "styled-components"
import DownloadButton from "./DownloadButton"

const Headline = styled.h1`
  color: var(--pureWhite);
  font-size: 70px;
  font-family: "Pacifico";
  font-weight: 700;
  text-shadow: var(--text-shadow-large);
  line-height: 1;
  margin: 0 0 0.5rem;
  z-index: 2;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 50px;
  }
`

const SubHeadline = styled.h2`
  color: var(--pureWhite);
  font-size: 25px;
  font-family: "Mulish";
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-shadow: var(--text-shadow-small);
  margin: 0;
  margin-bottom: 0.5rem;
  line-height: 1;
  text-transform: uppercase;
  z-index: 2;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 20px;
    letter-spacing: 0.1rem;
  }
`

/* const SmallHeadline = styled.h3`
  color: var(--pureWhite);
  font-weight: 300;
  font-size: 1.15rem;
  font-family: 'Mulish';
  margin: 0;
  margin-bottom: .5rem;
  line-height: 1;
  text-transform: lowercase;
  z-index: 2;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 15px;
  }
` */

const MainContent: React.FC = () => {
  return (
    <>
      <Headline>Ansel Colvin</Headline>
      <SubHeadline>Engineering Leader</SubHeadline>
      <DownloadButton />
    </>
  )
}

export default MainContent
