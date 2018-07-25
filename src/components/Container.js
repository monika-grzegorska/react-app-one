import React from "react";
import styles from "./css/Container.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import StronaA from "./StronaA";
import StronaB from "./StronaB";
import StronaC from "./StronaC";
import List from "./List";

function Container({ location }) {
    return (
        <div className="container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/StronaA" component={StronaA} />
              <Route path="/StronaB" component={StronaB} />
              <Route path="/StronaC" component={StronaC} />
              <Route path="/List" component={List} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Container);
