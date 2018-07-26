import React from "react";
import styles from "./css/LeftMenu.css";
import { Link } from "react-router-dom";

function LeftMenu() {
    return (
        <nav className="leftmenu">
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/StronaA">Polskie</Link>
                </li>
                <li>
                    <Link to="/StronaB">Włoskie</Link>
                </li>
                <li>
                    <Link to="/StronaC">Japońskie</Link>
                </li>
                <li>
                    <Link to="/List">Wszystkie</Link>
                </li>
                </ul>
                
        </nav>
    );
};
export default LeftMenu;