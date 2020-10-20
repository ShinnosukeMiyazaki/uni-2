import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PomLogo from "../../../assets/images/pomdolllogo.png";
import PomImg1 from "../../../assets/images/pomdoll1.jpg";
import PomImg2 from "../../../assets/images/pomdoll2.jpg";
import PomImg3 from "../../../assets/images/pom4.jpg";
import Title from "../common/PageTitle.jsx";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const PomdollLogo = styled.div`
  width: 300px;
  height: 100px;
  margin: 0 auto;
  display: block;
  background-image: url(${PomLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const PomdollTextContainer = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 3rem;
  margin: 30px 0;
`;

const PomdollImageContainer = styled.div`
  margin-bottom: 80px;
  height: 260px;
  position: relative;
`;

const PomdollImage = styled.img`
  width: 65%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  transition: 2.5s;
  opacity: ${(props) => (props.opacity ? 1 : 0)};
  border-radius: 8px;
  position: absolute;
`;
/*const Smp = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 0 15px 15px gray;
`;*/
const PomdollPerformance = styled.li`
  font-size: 1.8rem;
  font-weight: bold;
  padding-left: 15px;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

const Team = () => {
  const [pom1Opacity, setPom1Opacity] = useState(true);
  const [pom2Opacity, setPom2Opacity] = useState(false);
  const [pom3Opacity, setPom3Opacity] = useState(false);

  const imgNumber = 3;

  let counter = 2;

  useEffect(() => {
    setInterval(() => {
      if (counter === 1) {
        setPom3Opacity(false);
        setPom1Opacity(true);
      } else if (counter === 2) {
        setPom1Opacity(false);
        setPom2Opacity(true);
      } else if (counter === 3) {
        setPom2Opacity(false);
        setPom3Opacity(true);
      }

      counter === imgNumber ? (counter = 1) : (counter = counter + 1);
    }, 3000);
  }, []);
  return (
    <Container>
      <Title title="TEAM"></Title>
      <PomdollLogo />
      <PomdollTextContainer>
        <p>
          Pomdollは、2016年より石川県にて活動をスタートした4才~小学生のGirlsを対象にしたキッズチアダンスチームです。
        </p>
        <p>
          エンターテイメント性の高い魅せるダンスを目指してレッスンしています。
          踊っている本人だけではなく、Pomdollのダンスを見ていただいた方々も楽しい気持ちや元気を届けられるようなそんなパワーの溢れるチームを目指しています。
        </p>
      </PomdollTextContainer>
      <PomdollImageContainer>
        {/*<Smp />*/}
        <PomdollImage opacity={pom1Opacity} src={PomImg1} />
        <PomdollImage opacity={pom2Opacity} src={PomImg2} />
        <PomdollImage opacity={pom3Opacity} src={PomImg3} />
      </PomdollImageContainer>
      <Title title="PERFORMANCE"></Title>
      <ul>
        <PomdollPerformance>
          ソレイユフェスキッズアワード2016・2017出演
        </PomdollPerformance>
        <PomdollPerformance>
          金沢武士団ホームゲームハーフタイムショー出演
        </PomdollPerformance>
        <PomdollPerformance>じょんからまつり出演</PomdollPerformance>
        <PomdollPerformance>
          子育て支援メッセいしかわ2017・2018出演
        </PomdollPerformance>
        <PomdollPerformance>まちなかキッズステージ出演</PomdollPerformance>
        <PomdollPerformance>etc...</PomdollPerformance>
      </ul>
    </Container>
  );
};

export default Team;
