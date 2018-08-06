import React from "react";
import styles from "./css/MenuTag.css";

function MenuTag(input) {
    var menu = input.menu;

    return (
        <div className="menu-tag">
            {/*LEFT SIDE*/}
            <div className="menu-left">
                <div className="menu-mealname">{menu.mealname} </div>
                <div className="menu-mealtype">{menu.mealtype} </div>
                <div className="menu-ingridiens"> {menu.ingridiens}</div>
            </div>
            {/*RIGHT SIDE*/}
            <div className="menu-right">

                {/*price*/}
                <div className="menu-price">
                    <div className="menu-right-title"> Price </div>
                    <div className="menu-right-props">£ {menu.price}</div>
                </div>
            </div>
        </div>
    );
};
export default MenuTag;