import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  background-color: white;
`

const NavBarInner = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: right;
  background-color: transparent;
`

const StyledLink = styled(Link)`
  color: black;
  font-size: 15px;
  text-decoration: none;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #52C07E;
    text-decoration-thickness: 2px;
    font-weight: bold;
    color: #52C07E;
  }

`;

function Nav() {
  return (
    <NavBarContainer>
      <NavBarInner>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/">상표권</StyledLink>
        <StyledLink to="/">디자인</StyledLink>
        <StyledLink to="/">CONTECT</StyledLink>
        <StyledLink to="/">LOGIN</StyledLink>
      </NavBarInner>
    </NavBarContainer>
  );
}

export default Nav;
