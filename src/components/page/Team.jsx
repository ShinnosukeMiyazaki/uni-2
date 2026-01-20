import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PomLogo from "../../../assets/images/S__18464797.png";
import PomImg1 from "../../../assets/images/2026-01-15/image0.jpg";
import PomImg2 from "../../../assets/images/2026-01-15/image1.jpg";
import PomImg3 from "../../../assets/images/2026-01-15/image2.jpg";
import PomImg4 from "../../../assets/images/2026-01-15/image3.jpg";
import PomImg5 from "../../../assets/images/2026-01-15/image4.jpg";
import PomImg6 from "../../../assets/images/2026-01-15/image5.jpg";
import PomImg7 from "../../../assets/images/2026-01-15/image6.jpg";
import PomImg8 from "../../../assets/images/2026-01-15/image7.jpg";
import PomImg9 from "../../../assets/images/2026-01-15/image8.jpg";
import PomImg10 from "../../../assets/images/2026-01-15/image9.jpg";
import PomImg11 from "../../../assets/images/2026-01-15/image10.jpg";
import PomImg12 from "../../../assets/images/2026-01-15/image11.jpg";
import Title from "../common/PageTitle.jsx";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const PomdollLogo = styled.div`
  width: 340px;
  height: 100px;
  margin: 0 auto;
  display: block;
  background-image: url(${PomLogo});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: "ポムドール";
    letter-spacing: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -14px;
    font-size: 16px;
    font-weight: bold;
  }
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
  width: 100%;
  height: 420px;
  position: relative;
`;

const PomdollImage = styled.img`
  width: 80%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  transition: 2.5s;
  opacity: ${(props) => (props.opacity ? 1 : 0)};
  position: absolute;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const PomdollPerformance = styled.li`
  font-size: 1.8rem;
  font-weight: bold;
  padding-left: 15px;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

const PomdollPerformanceStrong = styled.span`
  font-size: 2.6rem;
  display: block;
  margin-bottom: 10px;
`;
const BodyContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: all 1.4s;
`;

const Team = () => {
  const [pom1Opacity, setPom1Opacity] = useState(true);
  const [pom2Opacity, setPom2Opacity] = useState(false);
  const [pom3Opacity, setPom3Opacity] = useState(false);
  const [pom4Opacity, setPom4Opacity] = useState(false);
  const [pom5Opacity, setPom5Opacity] = useState(false);
  const [pom6Opacity, setPom6Opacity] = useState(false);
  const [pom7Opacity, setPom7Opacity] = useState(false);
  const [pom8Opacity, setPom8Opacity] = useState(false);
  const [pom9Opacity, setPom9Opacity] = useState(false);
  const [pom10Opacity, setPom10Opacity] = useState(false);
  const [pom11Opacity, setPom11Opacity] = useState(false);
  const [pom12Opacity, setPom12Opacity] = useState(false);

  let counter = 2;

  useEffect(() => {
    setInterval(() => {
      if (counter === 1) {
        setPom12Opacity(false);
        setPom1Opacity(true);
      } else if (counter === 2) {
        setPom1Opacity(false);
        setPom2Opacity(true);
      } else if (counter === 3) {
        setPom2Opacity(false);
        setPom3Opacity(true);
      } else if (counter === 4) {
        setPom3Opacity(false);
        setPom4Opacity(true);
      } else if (counter === 5) {
        setPom4Opacity(false);
        setPom5Opacity(true);
      } else if (counter === 6) {
        setPom5Opacity(false);
        setPom6Opacity(true);
      } else if (counter === 7) {
        setPom6Opacity(false);
        setPom7Opacity(true);
      } else if (counter === 8) {
        setPom7Opacity(false);
        setPom8Opacity(true);
      } else if (counter === 9) {
        setPom8Opacity(false);
        setPom9Opacity(true);
      } else if (counter === 10) {
        setPom9Opacity(false);
        setPom10Opacity(true);
      } else if (counter === 11) {
        setPom10Opacity(false);
        setPom11Opacity(true);
      } else if (counter === 12) {
        setPom11Opacity(false);
        setPom12Opacity(true);
      }

      counter === 12 ? (counter = 1) : (counter = counter + 1);
    }, 3000);
  }, []);
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
        <Title title="TEAM"></Title>
        <PomdollLogo />
        <PomdollTextContainer>
          <p>2016年より石川県内にて活動をスタート。</p>
          <p>
            エンターテイメント性の高い「魅せるダンス」を追求するキッズチアダンスチームです。
          </p>
          <p>
            踊っている本人だけでなく、Pomdollのパフォーマンスをご覧いただいたすべての方に、楽しさや元気を届けられるような、パワーあふれるチームを目指しています♪
          </p>
        </PomdollTextContainer>
        <PomdollImageContainer>
          {/*<Smp />*/}
          <PomdollImage
            alt="Pomdollの画像1"
            opacity={pom1Opacity}
            src={PomImg1}
          />
          <PomdollImage
            alt="Pomdollの画像2"
            opacity={pom2Opacity}
            src={PomImg2}
          />
          <PomdollImage
            alt="Pomdollの画像3"
            opacity={pom3Opacity}
            src={PomImg3}
          />
          <PomdollImage
            alt="Pomdollの画像4"
            opacity={pom4Opacity}
            src={PomImg4}
          />
          <PomdollImage
            alt="Pomdollの画像5"
            opacity={pom5Opacity}
            src={PomImg5}
          />
          <PomdollImage
            alt="Pomdollの画像6"
            opacity={pom6Opacity}
            src={PomImg6}
          />
          <PomdollImage
            alt="Pomdollの画像7"
            opacity={pom7Opacity}
            src={PomImg7}
          />
          <PomdollImage
            alt="Pomdollの画像8"
            opacity={pom8Opacity}
            src={PomImg8}
          />
          <PomdollImage
            alt="Pomdollの画像9"
            opacity={pom9Opacity}
            src={PomImg9}
          />
          <PomdollImage
            alt="Pomdollの画像10"
            opacity={pom10Opacity}
            src={PomImg10}
          />
          <PomdollImage
            alt="Pomdollの画像11"
            opacity={pom11Opacity}
            src={PomImg11}
          />
          <PomdollImage
            alt="Pomdollの画像12"
            opacity={pom12Opacity}
            src={PomImg12}
          />
        </PomdollImageContainer>
        <Title title="HISTORY"></Title>
        <ul style={{ marginBottom: "100px" }}>
          <PomdollPerformance>
            ソレイユフェスキッズアワードステージ出演
          </PomdollPerformance>
          <PomdollPerformance>野々市じょんからまつり出演</PomdollPerformance>
          <PomdollPerformance>
            子育て支援メッセいしかわステージ出演
          </PomdollPerformance>
          <PomdollPerformance>
            金沢武士団ホームゲームパフォーマンス出演
          </PomdollPerformance>
          <PomdollPerformance>
            ツエーゲン金沢イベントステージ出演
          </PomdollPerformance>
          <PomdollPerformance>
            ヴィンセドール白山ホームゲームパフォーマンス出演
          </PomdollPerformance>
          <PomdollPerformance>まちなかキッズステージ出演</PomdollPerformance>
          <PomdollPerformance>ばばパンまつり出演</PomdollPerformance>
          <PomdollPerformance>かがやきフェス2023出演</PomdollPerformance>
          <PomdollPerformance>石川演芸文化祭出演</PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              ラグビースペシャルマッチ
            </PomdollPerformanceStrong>
            ALL早稲田大学VSALL慶應義塾大学
            <br />
            オープニングパフォーマンス
          </PomdollPerformance>
          <PomdollPerformance>ののいちカレーフェス出演</PomdollPerformance>
          <PomdollPerformance>JA農業祭出演 etc…</PomdollPerformance>
        </ul>
        <Title title="MV出演"></Title>
        <ul style={{ marginBottom: "100px" }}>
          <PomdollPerformance>
            ビーバー公式テーマソング「ビバ・ビーバーサンバ」MV出演
          </PomdollPerformance>
        </ul>
        <Title title="映画"></Title>
        <ul style={{ marginBottom: "100px" }}>
          <PomdollPerformance>
            「オンデマンド」エキストラ出演
          </PomdollPerformance>
        </ul>
        <Title title="コンテスト"></Title>
        <ul style={{ marginBottom: "100px" }}>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              第９回全日本小中学生ダンスコンクール
            </PomdollPerformanceStrong>
            全国大会　銅賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>TALK 2U U-12</PomdollPerformanceStrong>
            第3位
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              First Stage vol.6
            </PomdollPerformanceStrong>
            準優勝
            <br />
            オーディエンス賞
            <br />
            Ayame賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              First Stage vol.7
            </PomdollPerformanceStrong>
            優勝
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              全国ダンスパフォーマンスコンテスト2023
            </PomdollPerformanceStrong>
            全国決勝大会出場
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              第11回全日本小中学生ダンスコンクール西日本大会
            </PomdollPerformanceStrong>
            銀賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              JHCダンスコンテスト2023 FINAL
            </PomdollPerformanceStrong>
            出場
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              全国ダンスパフォーマンスコンテスト2024
            </PomdollPerformanceStrong>
            全国決勝大会出場
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              第12回全日本小中学生ダンスコンクール西日本大会
            </PomdollPerformanceStrong>
            銅賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              全国ダンスパフォーマンスコンテスト2025
            </PomdollPerformanceStrong>
            小学生オープン部門　レギュラー編成　優勝
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              第13回全日本小中学生ダンスコンクール東海大会
            </PomdollPerformanceStrong>
            銀賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              FUKUI DANCE CUP 2025
            </PomdollPerformanceStrong>
            応援ダンス賞
          </PomdollPerformance>
          <PomdollPerformance>
            <PomdollPerformanceStrong>
              JHCダンスコンテスト2025 FINAL
            </PomdollPerformanceStrong>
            FREESTYLE部門　小学生編成　3位
          </PomdollPerformance>
        </ul>
      </Container>
    </BodyContainer>
  );
};

export default Team;
