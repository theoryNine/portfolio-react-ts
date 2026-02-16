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
      href="https://www.dropbox.com/scl/fi/m946o71p7xm3xq51lxdei/Ansel-Colvin-Resume-TPM.pdf?rlkey=fkxuoqfonpk9v29365gy59rt5&dl=0"
    >
      <button>Access Resume</button>
    </ResumeButton>
  )
}

export default DownloadButton
