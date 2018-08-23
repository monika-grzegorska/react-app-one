import React from "react";
import styles from "./css/MealMenu.css";
import { Link } from "react-router-dom";


// To menu wyswietlane będzie juz po wyborze przez uzytkowanika restauracji
// Zdefiniowalismy tu nowa zmienna menu, która przyjmuje parametr funkcji "input"


function MealMenu(input) {
    var menu = input.restaurant;

    return (
        <nav className="mealmenu">

            <ul>

                <li>
                    <Link to="/Menu/pizza">pizza</Link>
                </li>
            </ul>
        </nav>
    );
};
export default MealMenu;