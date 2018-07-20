import React from "react";
import styles from "./css/LeftMenu.css";
import { Link } from "react-router-dom";

function LeftMenu() {
    return (
        <div className="leftmenu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/StronaA">Strona A</Link>
                </li>
                <li>
                    <Link to="/StronaB">Strona B</Link>
                </li>
                <li>
                    <Link to="/StronaC">Strona C</Link>
                </li>
            </ul>
        </div>
    );
};
export default LeftMenu;