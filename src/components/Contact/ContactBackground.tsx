import React from "react"
import styled from "styled-components"
import SpaceScene from "../../images/spacescenecaplowopacity.png"

const Background = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.6;
`

const ContactBackground: React.FC = () => {
  return <Background src={SpaceScene} alt="" />
}

export default ContactBackground
