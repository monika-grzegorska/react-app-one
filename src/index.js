import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";
import styles from "./components/css/index.css";
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Container from "./components/Container";

const App = () => (
    <Router>
        <div className="index-all">
            <Header />
            <div className="section">
                <Container />
            </div>
            </div>
  </Router>
);

// Render the main component into the dom
render(<App />, document.getElementById("root"));
