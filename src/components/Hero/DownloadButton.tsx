import React from "react"
import styled from "styled-components"

const ResumeButton = styled.a`
  z-index: 9;
  margin-top: 0.5rem;

  button {
    border: 1px solid var(--fireTeal);
    background: var(--darkTeal);
    text-shadow: var(--text-shadow-xl);
    color: var(--pureWhite);
    font-size: 1rem;
    padding: 8px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease box-shadow;
    letter-spacing: 2px;

    &:hover {
      box-shadow: 0 0 10px var(--fireTeal);
    }
  }
`

const DownloadButton: React.FC = () => {
  return (
    <ResumeButton
      target="_blank"
      rel="noopener"
      href="https://www.dropbox.com/scl/fi/l3bqzx5d11ka8mbsfgb80/Ansel-Colvin-Resume-EM.pdf?rlkey=qvamxmcticlqgk29i1v5cre9m&dl=0"
    >
      <button>Access Resume</button>
    </ResumeButton>
  )
}

export default DownloadButton
