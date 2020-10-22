import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../../assets/images/header-logo.png";

const HeaderWrap = styled.header`
  z-index: 3;
  width: 100%;
  height: 100px;
  background-color: rgba(236, 240, 241, 0.8);
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
  height: 75px;
`;

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scale(0);
    height: 3px;
    background: #2c3e50;
    width: 100%;
    transition: all 0.3s;
  }
  &:hover {
    &:after {
      transform: translateX(-50%) scale(1);
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <HeaderLogo />
      </Link>
      <NavWrapper>
        <NavItem>
          <Link
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
            }}
            to="/lesson"
          >
            LESSON
          </Link>
        </NavItem>
        <NavItem>
          <Link
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
            }}
            to="/team"
          >
            TEAM
          </Link>
        </NavItem>
        <NavItem>
          <Link
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
            }}
            to="/studio"
          >
            STUDIO
          </Link>
        </NavItem>
        <NavItem>
          <Link
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
            }}
            to="/contact"
          >
            CONTACT
          </Link>
        </NavItem>
      </NavWrapper>
    </HeaderWrap>
  );
};

export default Header;
