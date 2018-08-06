import React from "react";
import styles from "./css/MealMenu.css";
import { Link } from "react-router-dom";

function MealMenu(input) {
    var menu = input.menu;
    return (
        <nav className="mealmenu">

            <ul>

                <li>
                    <Link to="/Menu/*">lalala</Link>
                </li>
            </ul>
        </nav>
    );
};
export default MealMenu;