import React from "react";
import styled from "styled-components";

const ButtonLink = styled.a`
    z-index: 9;
    margin-top: .5rem;

    button {
        border: 1px solid var(--fireTeal);
        background: var(--darkTeal);
        text-shadow: 0 0 3px var(--pureWhite);
        color: var(--pureWhite);
        font-size: 1rem;
        padding: 8px;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease box-shadow;
        letter-spacing: 2px;

        &:hover {
            box-shadow: 0 0 10px var(--fireTeal);
        }
    }
`

type ButtonProps = {
    url: string;
    label: string;
    newWindow?: boolean;
}

const Button: React.FC<ButtonProps> = ({url, label, newWindow}) => {
    return (
        <ButtonLink target={newWindow ? "_blank" : undefined} rel={newWindow ? "noreferrer" : undefined} href={url}>
            <button>{label}</button>
        </ButtonLink>
    )
}

export default Button;