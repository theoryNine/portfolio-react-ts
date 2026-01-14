import React from "react";
import styled from "styled-components";

const NameContainer = styled.p`
    text-align: center;
    margin-top: 0;
`

const Name = styled.span`
    font-family: var(--secondaryFont);
`

const Copyright: React.FC = () => {
    return (
        <NameContainer>Site Designed and Developed by <Name>Ansel Colvin</Name></NameContainer>
    )
}

export default Copyright;