import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";
import styles from "./components/css/index.css";

import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";
import Restaurants from "./components/Restaurants";

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

// Render the main component into the dom
render(<App />, document.getElementById("root"));
