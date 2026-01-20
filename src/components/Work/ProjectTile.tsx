import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "./PlusIcon";
import TileContent from "./TileContent";

const TileContainer = styled.div`
    width: 100%;
    border: 1px solid var(--fireTeal);
    transition: .3s ease-out box-shadow, .3s linear background-color, .3s linear border;
    position: relative;
    overflow: hidden;
    
    h2 {
        transition: .3s ease text-shadow;
    }
    
    &:not(:last-child) {
        margin-bottom: .5rem;
    }
    
    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
        
        h2 {
            text-shadow: var(--text-shadow-xxl);
        }
        
        .plus-hori,
        .plus-vert {
            box-shadow: 0 0 10px var(--pureWhite);
        }

        img {
            top: 0;
        }
    }
    
    &.expanded {
        box-shadow: 0 0 10px var(--neonPink);
        background-color: var(--neonPinkDark1);
        border-color: var(--neonPink);
        
        h2 {
            text-shadow: var(--text-shadow-xxl);
        }
        
        .plus-vert {
            transform: rotate(90deg);
        }
    }
`

const BackgroundContainer = styled.img`
    position: absolute;
    top: 30px;
    right: 10%;
    width: 75%;
    height: auto;
    opacity: .5;
    z-index: -1;
    transition: .5s ease transform, .5s ease top, .3s ease opacity;
    transform: rotate(2deg);

    &:hover {
        top: 10px;
    }

    @media (max-width: 767px) {
        opacity: .4;
    }
    
    &.expanded {
        transform: rotate(0deg);
        top: 0;
        
        @media (max-width: 767px) {
            opacity: .2;
        }
    }
    `

const TileHeader = styled.button`
    display: flex;
    padding: 25px 10px;
    background: none;
    border: none;
    width: 100%;
    align-items: flex-end;
    z-index: 2;
    color: var(--pureWhite);
    text-shadow: var(--text-shadow-small);
    cursor: pointer;
    text-align: left;

    h3 {
        width: 88%;
        font-size: 1.5rem;

        @media (max-width: 767px) {
            font-size: 1.1rem;
        }
    }
    `

    type ProjectTileProps = {
        id: number;
        title: string;
        background: string;
        liveUrl?: string;
        screenshot1: string;
        screenshot1mob?: boolean;
        screenshot2?: string;
        screenshot2mob?: boolean;
        screenshot3?: string;
        screenshot3mob?: boolean;
        expanded?: boolean;
        role?: string;
        description?: string;
        stack: string;
    }

const ProjectTile: React.FC<ProjectTileProps> = ({id, title, background, liveUrl, screenshot1, screenshot1mob, screenshot2, screenshot2mob, screenshot3, screenshot3mob, role, description, stack}) => {
    const [expanded, setExpand] = useState<boolean>(false);

    return (
        <TileContainer className={expanded ? 'expanded' : undefined}>
            <BackgroundContainer alt="" src={background} className={expanded ? 'expanded' : undefined} />
            <TileHeader type="button" onClick={() => setExpand(!expanded)} aria-controls={'tile' + id} aria-expanded={expanded ? 'true' : 'false'}>
                <h3 id={'control' + id}>{title}</h3>
                <PlusIcon />
            </TileHeader>
            <TileContent 
                role={role} 
                screenshot1={screenshot1}
                screenshot1mob={screenshot1mob}  
                screenshot2={screenshot2} 
                screenshot2mob={screenshot2mob} 
                screenshot3={screenshot3} 
                screenshot3mob={screenshot3mob} 
                expanded={expanded} 
                description={description}
                stack={stack}
                liveUrl={liveUrl}
                id={id} />
        </TileContainer>
    )
}

export default ProjectTile;