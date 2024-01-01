import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import NotFound from "./components/page/NotFound.jsx";
import Top from "./components/page/Top.jsx";
import Lesson from "./components/page/Lesson.jsx";
import Team from "./components/page/Team.jsx";
import Studio from "./components/page/Studio.jsx";
import Contact from "./components/page/Contact.jsx";
import Thanks from "./components/page/Thanks.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

const Index = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/lesson" component={Lesson} />
        <Route path="/team" component={Team} />
        <Route path="/studio" component={Studio} />
        <Route path="/contact" component={Contact} />
        <Route path="/thanks" component={Thanks} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

render(<Index />, document.getElementById("root"));
