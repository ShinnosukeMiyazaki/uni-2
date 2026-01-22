import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const ContactItemWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 2rem;
`;

const ContactItem = styled.input`
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 15px;
  box-sizing: border-box;
`;

const MessageArea = styled.textarea`
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 15px;
  resize: none;
  height: 300px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  max-width: 280px;
  text-align: center;
  padding: 10px 0;
  background: #2c3e50;
  border: none;
  color: #ecf0f1;
  border-radius: 5px;
  font-size: 1.8rem;
`;

//メール

const Message = styled.h2`
  font-size: 2.6rem;
  font-weight: bold;
  margin-top: 30px;
`;

const InfoMail = styled.a`
  display: inline-block;
  font-size: 2.4rem;
  padding: 30px;
  margin-top: 100px;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const BodyContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: all 1.4s;
`;

const Contact = () => {
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
        <Title title="CONTACT" />
        <Message>
          お問い合わせの方は以下のメールアドレスまでご連絡ください。
          <br />
          クリックするとメールが立ち上がります。
        </Message>
        <InfoMail href="mailto:cheerdancestudio.uni@gmail.com">
          cheerdancestudio.uni@gmail.com
        </InfoMail>
      </Container>
    </BodyContainer>
  );
};

export default Contact;
