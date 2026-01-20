import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aquarius from "./Aquarius";
import Portrait from "./Portrait";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2em 0;
    position: relative;
    transition: 2s ease-in-out transform, 2s ease-in-out opacity;
    transition-delay: .5s;
    transform: translateY(-10px);
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }

    @media (max-width: 1024px) {
        margin: 2em;
    }

    @media (max-width: 767px) {
        margin: 1em .4em;
    }
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    background: rgba(0,0,0,.6);
    z-index: 1;
    border-right: none;
    width: 75%;

    @media (max-width: 1400px) {
        width: 70%;
    }

    @media (max-width: 1160px) {
        width: 65%;
    }

    @media (max-width: 1024px) {
        border-right: 1px solid var(--fireTeal);
        width: 100%;
    }
`

const TextContent = styled.div`
    width: 80%;
    margin-right: auto;
    margin-left: 2em;
    max-width: 1400px;

    @media (max-width: 1400px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 2em;
        margin-left: auto;
    }

    @media (max-width: 767px) {
        padding: 0 0.5em;
    }
`

const ImageContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1024px) {
        overflow: visible;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    `

type AboutWrapperProps = {
    children: React.ReactNode;
}
    
const AboutWrapper: React.FC<AboutWrapperProps> = ({ children }) => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <BorderedContainer className={animate === true ? 'animate' : ''}>
            <ImageContainer>
                <Portrait />
                <Aquarius />
            </ImageContainer>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
        </BorderedContainer>
    )
}

export default AboutWrapper;
