import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";
import styles from "./components/css/index.css";

import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Container from "./components/Container";
import Restaurants from "./components/Restaurants";
import MealMenu from "./components/MealMenu";
import Menu from "./components/Menu";

const App = () => (
    <Router>
        <div className="index-all">
            <Header />
            <div className="section">
             <LeftMenu />
             <Container />
            </div>
            <div className="section2">
                <MealMenu />
                <Menu />
                </div>
            </div>
  </Router>
);

// Render the main component into the dom
render(<App />, document.getElementById("root"));
