import React from "react";
import styled from "styled-components";
import UniLogo from "../../../assets/images/TopLogo.png";
import PomLogo from "../../../assets/images/pomdolllogo.png";

const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigLogo = styled.div`
  width: 70%;
  height: 700px;
  background-image: url(${UniLogo});
  background-size: contain;
  background-repeat: no-repeat;
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

const PomdollTextContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 30px 5px;
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 28px;
`;

const App = () => {
  return (
    <Container>
      <BigLogo />
      <PomdollContainer>
        <PomdollLogo />
        {/*<PomdollTextContainer>
          <p>
            Pomdollは、2016年より石川県内で活動をスタートした、
            年中〜小・中学生のGirlsを対象にしたキッズチアダンスチームです。
          </p>
          <p>
            エンターテイメント性の高い“魅せるダンス”を目指してレッスンをしています。
          </p>
          <p>
            踊っている本人だけではなく、Pomdollのダンスを見ていただいた方々に
            楽しい気持ちや元気を届けられる様なそんなパワー溢れるチームを目指しています。
          </p>
        </PomdollTextContainer>*/}
      </PomdollContainer>
    </Container>
  );
};

export default App;
