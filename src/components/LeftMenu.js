import React from "react";
import styles from "./css/LeftMenu.css";
import { Link } from "react-router-dom";


// Link - zapewnia dostepna navigacje wokol aplikacji
// tutaj pozwala na nawigowanie do wybranych rodzajaw kuchni
function LeftMenu() {
    return (
        <nav className="leftmenu">
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Restaurants/polish">Polish</Link>
                </li>
                <li>
                    <Link to="/Restaurants/italian">Italian</Link>
                </li>
                <li>
                    <Link to="/Restaurants/japanese">Japanese</Link>
                </li>
                <li>
                    <Link to="/Restaurants/all">All</Link>
                </li>
                </ul>
                
        </nav>
    );
};
export default LeftMenu;