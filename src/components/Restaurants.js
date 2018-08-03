import React from "react";
import styles from "./css/Restaurants.css";
import _ from "lodash";
import RestaurantTag from "./RestaurantTag";

function Restaurants(input) {
    var params = input.match.params;

    var restaurants = [
        {
            id: 1, photo: "https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png",
            name: "Bistro Pado", type: "polish", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km", rating: 2
        },
        {
            id: 2, photo: "https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png",
            name: "Bistro Pado2", type: "polish", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km", rating: 3
        },
        {
            id: 3, photo: "https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png",
            name: "Bistro Pado", type: "italian", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km", rating: 4 
        },
        {
            id: 4, photo: "https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png",
            name: "Bistro Pado", type: "japanese", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km", rating: 4
        },
    ];
    var restaurantsFiltered = restaurants;
    if (params.foodType != 'all') {
        restaurantsFiltered = _.filter(restaurants, { 'type': params.foodType });
    } 

  
    //var filterFunction = function (inputArray, propertToFilterOn, valueToUeInFiltering) {
    //    var result = [];
    //    for (int i = 0; i < inputArray.length; i++){
    //        if (inputArray[i][propertToFilterOn] == valueToUeInFiltering)
    //            result.push(inputArray[i]);
    //    }
    //    return result;
    //}

    const listItems = restaurantsFiltered.map((restaurant) =>
        <li className="restaurant-li" key={restaurant.id}>
            <RestaurantTag restaurant={restaurant} />
        </li>
        
    );

    return (
        <div className="restaurants">
            <ul className="restaurants-listitems">{listItems}</ul>
            </div>
    );
};



export default Restaurants;