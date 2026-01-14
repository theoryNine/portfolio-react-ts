import React from "react";
import styled from "styled-components";

const ResumeButton = styled.a`
    z-index: 9;
    margin-top: .5rem;

    button {
        border: 1px solid var(--fireTeal);
        background: var(--darkTeal);
        text-shadow: 0 0 5px var(--pureWhite);
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

const DownloadButton: React.FC = () => {
    return (
        <ResumeButton target="_blank" rel="noopener" href="https://www.dropbox.com/scl/fi/0ahz2g8uypyqgybrlbmkf/Ansel-Colvin-Resume.pdf?rlkey=ch0u2v2nhwi9gwygav9pibu3x&dl=0">
            <button>Access Resume</button>
        </ResumeButton>
    )
}

export default DownloadButton;