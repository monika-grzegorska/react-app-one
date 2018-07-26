import React from "react";
import styles from "./css/StronaA.css";
import { Switch, Route, withRouter } from "react-router-dom";
import List from "./List";

function StronaA({location}) {
    return (
        <div className="stronaa">
          <span className="title">Jedzenie polskie</span>
          <section className="route-section">
              <Switch location={location}>
                  <Route exact path="/List" component={List} />
              </Switch>
          </section>
    </div>
  );
};

export default StronaA;
