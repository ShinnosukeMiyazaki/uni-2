import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/images/Instagram.png";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  /*background-color: #2c3e50;*/
  margin-top: auto;
`;

const InstaAncker = styled.a`
  display: inline-block;
  height: 30px;
  width: 30px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InstaAncker href="https://www.instagram.com/cheerdancestudiouni/"></InstaAncker>
    </FooterContainer>
  );
};

export default Footer;
