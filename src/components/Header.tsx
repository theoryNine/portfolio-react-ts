import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
    height: 2rem;
    width: 100%;

    @media (max-width: 1024px) {
        height: 0;
    }
`

const Header: React.FC = () => {
    return (
        <HeaderBar />
    )
}

export default Header;