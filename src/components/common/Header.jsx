import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/images/header-logo.png";

const HeaderWrap = styled.header`
  width: 100%;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
`;

const HeaderLogo = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 240px;
  height: 100%;
`;

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo />
      <NavWrapper>
        <NavItem>Lesson</NavItem>
        <NavItem>Team</NavItem>
        <NavItem>Studio</NavItem>
        <NavItem>Contact</NavItem>
      </NavWrapper>
    </HeaderWrap>
  );
};

export default Header;
