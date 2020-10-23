import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 80px;
  display: block;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const PageTitle = (props) => {
  return <Title>{props.title}</Title>;
};

export default PageTitle;
