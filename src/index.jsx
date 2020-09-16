import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Top from "./components/page/Top.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Top />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

render(<Index />, document.getElementById("root"));
