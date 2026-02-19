import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  z-index: 9;
  margin-top: 0.5rem;
  position: relative;
  display: inline-block;
`

const ToggleButton = styled.button`
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
`

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--fireTeal);
  background: var(--darkTeal);
  min-width: 100%;

  a {
    color: var(--pureWhite);
    text-decoration: none;
    padding: 8px 12px;
    font-size: 0.9rem;
    letter-spacing: 1px;
    white-space: nowrap;
    transition: 0.2s ease background;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`

const DownloadButton: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [open])

  return (
    <Wrapper ref={ref}>
      <ToggleButton onClick={() => setOpen(prev => !prev)}>
        Access Resume ▾
      </ToggleButton>
      {open && (
        <Menu>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.dropbox.com/scl/fi/l3bqzx5d11ka8mbsfgb80/Ansel-Colvin-Resume-EM.pdf?rlkey=qvamxmcticlqgk29i1v5cre9m&dl=0"
          >
            Engineering Manager
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.dropbox.com/scl/fi/m946o71p7xm3xq51lxdei/Ansel-Colvin-Resume-TPM.pdf?rlkey=fkxuoqfonpk9v29365gy59rt5&dl=0"
          >
            Technical Program Manager
          </a>
        </Menu>
      )}
    </Wrapper>
  )
}

export default DownloadButton
