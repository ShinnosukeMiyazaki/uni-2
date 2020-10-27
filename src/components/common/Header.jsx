import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../../assets/images/header-logo.png";

const HeaderWrap = styled.header`
  z-index: 3;
  width: 100%;
  height: 100px;
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
  height: 75px;
  cursor: pointer;
`;

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 850px) {
    display: none;
  }
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

const ResponsiveHeaderNaviIconWrapper = styled.div`
  display: none;
  width: 45px;
  height: 35px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveHeaderNaviIconTop = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #2c3e50;
  ${(props) =>
    props.isActive
      ? "transform: rotate(-405deg)translateY(-50%);top: 50%;"
      : ""};
  transition: all 0.8s;
`;

const ResponsiveHeaderNaviIconMiddle = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2c3e50;
  ${(props) => (props.isActive ? "display: none" : "")};
`;

const ResponsiveHeaderNaviIconBottom = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #2c3e50;
  ${(props) =>
    props.isActive
      ? "transform: rotate(405deg)translateY(-50%);top: 50%;"
      : ""};
  transition: all 0.4s;
`;

const ResponsiveNaviWrapper = styled.ul`
  position: fixed;
  left: 0;
  top: 100px;
  width: 100%;
  height: 100%;
  height: -webkit-calc(100% - 100px); /*Chrome19~25対応*/
  height: -moz-calc(100% - 100px); /*Firefox4~15対応*/
  height: calc(100% - 100px);
  color: white;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

const ResponsiveNaviFirst = styled.li`
  width: 100%;
  height: -webkit-calc(25% - 25px); /*Chrome19~25対応*/
  height: -moz-calc(25% - 25px); /*Firefox4~15対応*/
  height: calc(25% - 25px);
  position: fixed;
  top: 100px;
  z-index: 999;
  color: white;
  font-size: 22px;
  background-color: #2c3e50;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isActive
      ? "transform:translateX(0%);"
      : "transform:translateX(-100%);"}
`;
const ResponsiveNaviSecond = styled.li`
  width: 100%;
  height: 25%;
  background-color: #34495e;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  height: -webkit-calc(25% - 25px); /*Chrome19~25対応*/
  height: -moz-calc(25% - 25px); /*Firefox4~15対応*/
  height: calc(25% - 25px);
  position: fixed;
  top: -webkit-calc(25% - 25px + 100px); /*Chrome19~25対応*/
  top: -moz-calc(25% - 25px + 100px); /*Firefox4~15対応*/
  top: calc(25% - 25px + 100px);
  z-index: 999;
  color: white;

  ${(props) =>
    props.isActive
      ? "transform:translateX(0%);"
      : "transform:translateX(100%);"}
`;
const ResponsiveNaviThird = styled.li`
  width: 100%;
  height: 25%;
  background-color: #2c3e50;
  transition: all 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  height: -webkit-calc(25% - 25px); /*Chrome19~25対応*/
  height: -moz-calc(25% - 25px); /*Firefox4~15対応*/
  height: calc(25% - 25px);
  position: fixed;
  top: -webkit-calc(50% - 50px + 100px); /*Chrome19~25対応*/
  top: -moz-calc(50% - 50px + 100px); /*Firefox4~15対応*/
  top: calc(50% - 50px + 100px);
  z-index: 999;
  color: white;
  ${(props) =>
    props.isActive
      ? "transform:translateX(0%);"
      : "transform:translateX(-100%);"}
`;
const ResponsiveNaviFourth = styled.li`
  width: 100%;
  height: 25%;
  background-color: #34495e;
  transition: all 0.8s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-calc(25% - 25px); /*Chrome19~25対応*/
  height: -moz-calc(25% - 25px); /*Firefox4~15対応*/
  height: calc(25% - 25px);
  position: fixed;
  top: -webkit-calc(75% - 75px + 100px); /*Chrome19~25対応*/
  top: -moz-calc(75% - 75px + 100px); /*Firefox4~15対応*/
  top: calc(75% - 75px + 100px);
  z-index: 999;
  color: white;
  font-size: 22px;
  ${(props) =>
    props.isActive
      ? "transform:translateX(0%);"
      : "transform:translateX(100%);"}
`;

const Header = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);

  const responsiveIconClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const clickTopLink = () => {
    history.push("/");
    setIsActive(false);
  };
  const clickLessonLink = () => {
    history.push("/lesson");
    setIsActive(false);
  };
  const clickTeamLink = () => {
    history.push("/team");
    setIsActive(false);
  };
  const clickStudioLink = () => {
    history.push("/studio");
    setIsActive(false);
  };
  const clickContactLink = () => {
    history.push("/contact");
    setIsActive(false);
  };
  return (
    <>
      <HeaderWrap>
        <HeaderLogo onClick={clickTopLink} />
        <NavWrapper>
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
        <ResponsiveHeaderNaviIconWrapper onClick={responsiveIconClick}>
          <ResponsiveHeaderNaviIconTop isActive={isActive} />
          <ResponsiveHeaderNaviIconMiddle isActive={isActive} />
          <ResponsiveHeaderNaviIconBottom isActive={isActive} />
        </ResponsiveHeaderNaviIconWrapper>
      </HeaderWrap>
      <ResponsiveNaviFirst onClick={clickTeamLink} isActive={isActive}>
        TEAM
      </ResponsiveNaviFirst>
      <ResponsiveNaviSecond onClick={clickLessonLink} isActive={isActive}>
        LESSON
      </ResponsiveNaviSecond>
      <ResponsiveNaviThird onClick={clickStudioLink} isActive={isActive}>
        STUDIO
      </ResponsiveNaviThird>
      <ResponsiveNaviFourth onClick={clickContactLink} isActive={isActive}>
        CONTACT
      </ResponsiveNaviFourth>
    </>
  );
};

export default Header;
