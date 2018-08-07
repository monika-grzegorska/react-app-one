import React from "react";
import styles from "./css/MealMenu.css";
import { Link } from "react-router-dom";

function MealMenu(input) {
    var menu = input.restaurant;
    return (
        <nav className="mealmenu">

            <ul>

                <li>
                    <Link to="/Restaurant/Bistro Fado">pizza</Link>
                </li>
            </ul>
        </nav>
    );
};
export default MealMenu;