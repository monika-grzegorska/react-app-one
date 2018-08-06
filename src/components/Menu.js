import React from "react";
import styles from "./css/Menu.css";
import _ from "lodash";
import MenuTag from "./MenuTag";

class Menu extends React.Component {
    constructor(input) {
        super(input);
        this.state = {
            menuList: null,
            mealsType: input.match.params.mealsType
        };
        fetch("http://localhost:56423/api/menu")
            .then(res => res.json())
            .then((menuFiltered) => {
                    menuFiltered = _.filter(menuFiltered, { 'mealtype': this.state.mealsType });
                const listItems = menuFiltered.map((menu) =>
                    <li className="menu-li" key={menu.id}>
                        <MenuTag menu={menu} />
                    </li>
                );

                this.setState({
                    menuList: listItems
                });
            }),
            (error) => {
                console.log(error);
            };
    }

    render() {
        return (
            <div className="menu">
                <ul className="menu-listitems">{this.state.menuList}</ul>
            </div>
        );
    }
};

export default Menu;