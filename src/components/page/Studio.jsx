import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";
import StudioImg1 from "../../../assets/images/uni-studio1.png";
import StudioImg2 from "../../../assets/images/uni-studio2.png";

const StudioImageContainer = styled.div`
  margin-bottom: 80px;
  height: 500px;
  position: relative;
`;

const StudioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 2.5s;
  opacity: ${(props) => (props.opacity ? 1 : 0)};
  position: absolute;
`;

const SectionWrapper = styled.section`
  margin-bottom: 80px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
`;

const SubTitle = styled.h4`
  font-size: 26px;
  margin-bottom: 40px;
  display: block;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
`;

const BodyContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: all 1.4s;
`;

const Studio = () => {
  const [studio1Opacity, setStudio1Opacity] = useState(true);
  const [studio2Opacity, setStudio2Opacity] = useState(false);

  const imgNumber = 2;

  let counter = 2;

  useEffect(() => {
    setInterval(() => {
      if (counter === 1) {
        setStudio2Opacity(false);
        setStudio1Opacity(true);
      } else if (counter === 2) {
        setStudio1Opacity(false);
        setStudio2Opacity(true);
      }

      counter === imgNumber ? (counter = 1) : (counter = counter + 1);
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
      <Title title="STUDIO"></Title>
      <StudioImageContainer>
        <StudioImage
          decoding="async"
          src={StudioImg1}
          opacity={studio1Opacity}
          alt="スタジオの画像１"
        />
        <StudioImage
          decoding="async"
          src={StudioImg2}
          opacity={studio2Opacity}
          alt="スタジオの画像2"
        />
      </StudioImageContainer>
      <SectionWrapper>
        <SubTitle>定休日</SubTitle>
        <p>土曜・日曜・月曜/お盆・年末年始</p>
      </SectionWrapper>
      <SectionWrapper>
        <SubTitle>アクセス</SubTitle>
        <p>〒921-8044　石川県金沢市米泉2-93-1 2F</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.4168539693615!2d136.62322139935202!3d36.544060688730866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff83589940cbe07%3A0xffb94ad2f56cd646!2sCHEER%20DANCE%20STUDIO%20uni!5e0!3m2!1sja!2sjp!4v1604556443911!5m2!1sja!2sjp"
          frameBorder="0"
          style={{
            border: "0",
            width: "100%",
            height: "300px",
            margin: "25px 0px",
          }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <p>076-241-0801</p>
        <p>受付時間：平日10:00~20:00　土曜10:00~15:00</p>
        <p>※レッスン中は出られません。</p>
      </SectionWrapper>
      <SectionWrapper>
        <SubTitle>代表</SubTitle>
        <p>高畑 久見子</p>
      </SectionWrapper>
    </BodyContainer>
  );
};

export default Studio;
