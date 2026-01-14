import React from "react";
import styled from "styled-components";

const Plus = styled.div`
    position: absolute;
    right: 1rem;
    top: 55px;
    width: 30px;
    height: 30px;
    z-index: 2;

    @media (max-width: 767px) {
        width: 20px;
        height: 20px;
        top: 45px;
    }
`

const HoriLine = styled.span`
    width: 100%;
    box-shadow: 0 0 3px var(--pureWhite);
    height: 2px;
    background-color: var(--pureWhite);
    position: absolute;
    top: 50%;
    left: 0;
    transition: .3s ease box-shadow;

    @media (max-width: 767px) {
        top: 47%;
    }
`

const VertLine = styled.span`
    height: 100%;
    box-shadow: 0 0 3px var(--pureWhite);
    width: 2px;
    background-color: var(--pureWhite);
    position: absolute;
    left: 45%;
    transition: .5s ease all;

    @media (max-width: 767px) {
        left: 47%;
    }
`

const PlusIcon: React.FC = () => {
    return (
        <Plus>
            <HoriLine className="plus-hori" />
            <VertLine className="plus-vert" />
        </Plus>
    )
}

export default PlusIcon;