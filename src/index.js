import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";

import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";

const App = () => (
  <Router>
        <div>
            <Header />
            <div className="section-one">
             <LeftMenu />
             <Container />
            </div>
            </div>
  </Router>
);

render(<App />, document.getElementById("root"));
