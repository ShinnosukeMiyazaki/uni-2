import React from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 1px;
`;

const Thanks = () => {
  return (
    <>
      <Title title="Thank you!" />
      <TextContainer>
        <p>お問い合わせありがとうございます。</p>
        <p>担当者がメールにてご回答いたしますので、少々お待ちください。</p>
      </TextContainer>
    </>
  );
};

export default Thanks;
