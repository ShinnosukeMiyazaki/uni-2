import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UniLogo from "../../../assets/images/TopLogo.png";
import PomLogo from "../../../assets/images/S__18464797.png";

const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigLogo = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${UniLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 800px) {
    width: 70%;
    height: 620px;
  }
  @media (max-width: 650px) {
    width: 70%;
    height: 550px;
  }
  @media (max-width: 555px) {
    width: 80%;
    height: 550px;
  }
  @media (max-width: 450px) {
    width: 85%;
    height: 400px;
  }
`;

const PomdollContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PomdollLogo = styled.div`
  width: 300px;
  height: 100px;
  background-image: url(${PomLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const BodyContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: all 1.4s;
`;

const App = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(true);
    }, 300);
  }, []);
  return (
    <BodyContainer load={load}>
      <Container>
        <BigLogo />
        <PomdollContainer>
          <PomdollLogo />
        </PomdollContainer>
      </Container>
    </BodyContainer>
  );
};

export default App;
