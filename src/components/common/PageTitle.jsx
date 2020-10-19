import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 28px;
  margin: 30px 0;
  display: block;
  width: 100%;
  text-align: center;
`;

const PageTitle = (props) => {
  return <Title>{props.title}</Title>;
};

export default PageTitle;
