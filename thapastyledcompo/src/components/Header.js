import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <MainHeader>
                <header>
                    <NavLink to="/">
                        <img src="./images/logo.png" alt="logo" className='logo' />
                    </NavLink>
                </header>
                <Navbar />
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
.logo {
  height: auto;
  max-width: 30%;
}
`;

export default Header