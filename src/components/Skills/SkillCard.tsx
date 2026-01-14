import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 0;
    }
`

const CardContainer = styled.div`
    border: 1px solid var(--neonPinkDark2);
    width: 100%;
    background: var(--neonPinkDark1);
    padding: 9px 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin-bottom: .5rem;
    }
`

const CardTitle = styled.h3`
    font-size: 1rem;
    text-align: center;
    margin: 0;
`

type SkillCardProps = {
    toolName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({toolName}) => {
    return (
        <CardBox>
        <CardContainer>
            <CardTitle>{toolName}</CardTitle>
        </CardContainer>
        </CardBox>
    )
}

export default SkillCard;