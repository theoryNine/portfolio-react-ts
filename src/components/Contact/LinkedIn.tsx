import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 2.5rem 0 0 0;
        font-family: var(--secondaryFont);
        font-size: 1.5rem;
    }

    button {
        background: var(--linkedInBlue);
        padding: .2rem 2rem;
        color: var(--pureWhite);
        font-size: 1.1rem;
        font-family: var(--primaryFont);
        letter-spacing: 3px;
        text-shadow: var(--text-shadow-xxl);
        border: 1px solid var(--linkedInBlue);
        cursor: pointer;
        margin-left: .5rem;
        transition: .3s ease box-shadow;

        &:hover {
            box-shadow: 0 0 10px var(--linkedInBlue);
        }
    }
`

const LinkedIn: React.FC = () => {
    return (
        <Container>
            <p>visit my: <a href="https://www.linkedin.com/in/anselcolvin" target="_blank" rel="noreferrer"><button>LinkedIn</button></a></p>
        </Container>
    )
}

export default LinkedIn;