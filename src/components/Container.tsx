import React from "react"
import styled from "styled-components"

const ContainerComp = styled.div`
  max-width: 960px;
  width: 100%;
`

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerComp>{children}</ContainerComp>
}

export default Container
