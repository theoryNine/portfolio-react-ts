import React from "react";
import styled from "styled-components";
import Screenshot from "./Screenshot";
import Button from "../Button";

const ExpandContainer = styled.div`
    max-height: 0;
    overflow: hidden;
    padding: 0;
    transition: .5s ease max-height;
        
    &.expanded {
        max-height: 1300px;
        opacity: 1;
    }
`

const ContentContainer = styled.div`
    background: var(--black85);
    margin: 10px 10px;
    padding: 1rem;

    @media (max-width: 767px) {
        padding: .5rem;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const RoleWrapper = styled.div`
    display: flex;
    justify-content: center;

    p {
        letter-spacing: 2px;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    max-width: 900px;
    margin: 0 auto;
`

type TileContentProps = {
    id: number;
    expanded: boolean;
    liveUrl?: string;
    screenshot1: string;
    screenshot1mob?: boolean;
    screenshot2?: string;
    screenshot2mob?: boolean;
    screenshot3?: string;
    screenshot3mob?: boolean;
    role?: string;
    description?: string;
    stack?: string;
}

const TileContent: React.FC<TileContentProps> = ({id, expanded, liveUrl, screenshot1, screenshot1mob, screenshot2, screenshot2mob, screenshot3, screenshot3mob, role, description, stack}) => {
    return (
        <ExpandContainer className={expanded ? 'expanded' : undefined}>
            <div id={'tile' + id} aria-labelledby={'control' + id}>
                <ContentContainer>
                    <ImageContainer>
                        <Screenshot mobile={screenshot1mob} image={screenshot1} />
                        {screenshot2 && <Screenshot mobile={screenshot2mob} image={screenshot2} />}
                        {screenshot3 && <Screenshot mobile={screenshot3mob} image={screenshot3} />}
                    </ImageContainer>
                    <ButtonWrapper>
                        {liveUrl && <Button url={liveUrl} newWindow={true} label="Access Live Site" />}
                    </ButtonWrapper>
                    <RoleWrapper>{role && <p><b>Role:</b> {role}</p>}</RoleWrapper>
                    <ContentWrapper>{description && <p><b>Project Description:</b> {description}</p>}</ContentWrapper>
                    <ContentWrapper>{stack && <p><b>Tech Stack:</b> {stack}</p>}</ContentWrapper>
                </ContentContainer>
            </div>
        </ExpandContainer>
    )
}

export default TileContent;