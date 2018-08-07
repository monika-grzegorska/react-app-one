import React from "react";
import styles from "./css/Container.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";

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
                            <Route exact path="/" component={Restaurants} />
                            <Route path="/Restaurants/:foodType" component={Restaurants} />
                            <Route path="/Restaurant/:restaurantName" component={Restaurant} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(Container);
