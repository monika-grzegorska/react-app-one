import React from "react";
import styles from "./css/List.css";


function List() {
    var restaurants = [
     { photo: <img  src="https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png"/> , name: "Bistro Pado", type: "Polska", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km" },
     { photo: <img src="https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png" />, name: "Bistro Pado", type: "Włoska", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km" },
    ];

var _ = require('lodash')
_.filter(restaurants, { 'type': "Polska" });

    const listItems = restaurants.map((restaurant) =>
        <li key={restaurant}>{restaurant.photo} Nazwa {restaurant.name} typ {restaurant.type} Cena minialna  {restaurant.minprice} Dostawa  {restaurant.delivery} Dystans {restaurant.distance}</li>
    );

    return (
        <div className = "list">
            <ul>{listItems}</ul>
            </div>
    );
};



export default List;