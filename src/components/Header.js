import React from "react";
import styles from "./css/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1 className="title">Portal restauracyjny</h1>
           <br/>
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
export default Header;
