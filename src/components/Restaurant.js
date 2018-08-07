import React from "react";
import styles from "./css/Restaurant.css";
import _ from "lodash";
import MenuTag from "./MenuTag";
import MealMenu from "./MealMenu";

class Restaurant extends React.Component {

    constructor(input) {
        super(input);
         this.state = {
            menuListItems: null,
            mealType: input.match.params.mealType
        };

        fetch("http://localhost:56423/api/menu")
            .then(res => res.json())
            .then((menuFiltered) => {
                    menuFiltered = _.filter(menuFiltered, { 'mealType': this.state.mealType });

                const listItems = menuFiltered.map((menu) =>
                    <li className="menu-li" key={menu.id}>
                        <MenuTag menu={menu} />
                    </li>
                );

                this.setState({
                    menuListItems: listItems
                });
            }),
            (error) => {
                console.log(error);
            };
    }

    render() {
        return (
            <div> <MealMenu />
                <div className="menu">
                    <ul className="menu-listitems">{this.state.menuListItems}</ul>
                </div>
            </div>
        );
    }
};
export default Restaurant;