import React from "react";
import styled, { keyframes } from "styled-components";
import StarsImg from "../images/stars.png";
import TwinkleImg from "../images/twinkling.png";

const Stars = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
    background:transparent url(${StarsImg}) repeat top center;
    z-index:0;
`

const twinkleAnimation = keyframes`
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
`

const Twinkling = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
    background:transparent url(${TwinkleImg}) repeat top center;
    z-index:1;
    animation:${twinkleAnimation} 500s linear infinite;
`

const Starfield: React.FC = () => {
    return(
        <>
            <Stars></Stars>
            <Twinkling></Twinkling>
        </>
    )
}

export default Starfield;