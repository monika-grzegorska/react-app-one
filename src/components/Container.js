import React from "react";
import styles from "./css/Container.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import Restaurants from "./Restaurants";
import Menu from "./Menu";

function Container({ location }) {
    return (
        <div className="container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade">
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/Restaurants/:foodType" component={Restaurants} />
              <Route path="/Menu/:mealsType" component={Menu} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup> 
    </div>
  );
};

export default withRouter(Container);
