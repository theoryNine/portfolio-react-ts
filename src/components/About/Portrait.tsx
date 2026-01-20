import React from "react"
import Picture from "../../images/anselmay1.jpg"
import styled from "styled-components"

const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 350px;
  border: 1px solid var(--fireTeal);
  position: relative;
  z-index: 1;
  margin-right: 1rem;

  &::before {
    content: "";
    height: 15px;
    width: 15px;
    background: white;
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

const Portrait: React.FC = () => {
  return <Image alt="" src={Picture} />
}

export default Portrait
