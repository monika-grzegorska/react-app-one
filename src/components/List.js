import React from "react";
import styles from "./css/List.css";


function List() {
    let restaurants = [
     { photo: <img  src="https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png"/> , name: "Bistro Pado", type: "Pizza", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km" },
    ];
    const listItems = restaurants.map((restaurant) =>
        <li>{restaurant.photo} Nazwa {restaurant.name} typ {restaurant.type} Cena minialna  {restaurant.minprice} Dostawa  {restaurant.delivery} Dystans {restaurant.distance}</li>
    );
    return (
        <div className = "list">
            <ul>{listItems}</ul>
            </div>
    );
};
export default List;