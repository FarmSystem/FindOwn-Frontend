import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { MainLogo } from "./MainLogo";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  background-color: white;

  @media (max-width: 1500px) {
    padding: 0px;
  }
`;

const NavBarInner = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  max-width: 1920px;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 15px;
  text-decoration: none;
  padding: 0 10px;
  font-family: "Inter", sans-serif;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #52c07e;
    text-decoration-thickness: 2px;
    font-weight: bold;
    color: #52c07e;
  }
`;

function Nav() {
  return (
    <NavBarContainer>
      <NavBarInner>
        <MainLogo />
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/">상표권</StyledLink>
          <StyledLink to="/">디자인</StyledLink>
          <StyledLink to="/">CONTECT</StyledLink>
          <StyledLink to="/">LOGIN</StyledLink>
        </div>
      </NavBarInner>
    </NavBarContainer>
  );
}

export default Nav;
