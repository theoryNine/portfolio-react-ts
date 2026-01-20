import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NameContainer = styled.p`
    text-align: center;
    margin-top: 0;
    transition: 2s ease-in-out transform, 2s ease-in-out opacity;
    transition-delay: .5s;
    transform: translateY(-20px);
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }
`

const Name = styled.span`
    font-family: var(--secondaryFont);
`

const Copyright: React.FC = () => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <NameContainer className={animate === true ? 'animate' : ''}>Site Designed and Developed by <Name>Ansel Colvin</Name></NameContainer>
    )
}

export default Copyright;