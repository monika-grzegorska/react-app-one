import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";
import styles from "./components/css/index.css";

import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";
import List from "./components/List";

_ = require('lodash')
const App = () => (
  <Router>
        <div>
            <Header />
            <div className="section">
             <LeftMenu />
             <Container />
            </div>
            </div>
  </Router>
);

render(<App />, document.getElementById("root"));
