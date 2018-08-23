import React from "react";
import styles from "./css/Container.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";

        // Container - pobiera dane, nastepnie wyswietla odpowiadajacy mu podkomponent
        // tutaj przyjmuje wartosci lokalizacji, zeby potem przekierowac uzytkownika
        // do odpowiedniego miejsca


        // TransitionGruoup https://reactcommunity.org/react-transition-group/transition-group
        // CSSTransition  https://www.w3schools.com/css/css3_transitions.asp

        //Switch - renderuje boolean input
        //podczas parsowania mówi reactowi ¿e gdy napotka pierwszy pasuj¹cy kod
        //nie szuka dalej -- przyspiesza to dzialanie 

        //withRouter podaje zaktualizowane ustawienia match, location i history za kazdym razem
        // gdy zwrappowany w nim  komponent sie zrendereuje

        //Route - jego podstawowym zadaniem jest renderowanie 
        // jakiegos UI jesli lokalizacja zgadza sie z podana
        // sciezka
                            //1- to exact path czyli strona poczatkowa naszej app
                            //2 - œciezka wyswietli  liste restauracji ze 
                            // wzgledu na podawane w niej jedzenie
                            // po dodaniu po slashu rodzaju kuchni jaka nas interesuje
                            //3- wchodzimy juz w menu wybranej przez nas restauracji

function Container({ location }) {
    return (
       <div className="container">
            <TransitionGroup className="transition-group">         
                <CSSTransition
                    // tutaj mamy przechodzenie strony (znikanie/ pojawianie sie )
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade">
                    <section className="route-section">                       
                        <Switch location={location}>
                            <Route exact path="/" component={Restaurants} />
                           <Route path="/Restaurants/:foodType" component={Restaurants} />
                            <Route path="/Restaurant/:restaurantId/:mealType?" component={Restaurant} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(Container);
