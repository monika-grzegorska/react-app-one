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
                    <Link to="/Restaurants/polish">Polskie</Link>
                </li>
                <li>
                    <Link to="/Restaurants/italian">Włoskie</Link>
                </li>
                <li>
                    <Link to="/Restaurants/japanese">Japońskie</Link>
                </li>
                <li>
                    <Link to="/Restaurants/all">Wszystkie</Link>
                </li>
                </ul>
                
        </nav>
    );
};
export default LeftMenu;