import React from "react";
import styles from "./css/RestaurantTag.css";
import Rating from "./Rating"

function RestaurantTag(input) {
    var restaurant = input.restaurant;
    return (
        <div className="restaurant-tag">
            {/*LEFT SIDE*/}
            <div className="restaurant-left">
                <img className="restaurant-logo" src={restaurant.photo} />
                <div className="restaurant-name"> {restaurant.name} </div>
                <div className="restaurant-type"> {restaurant.type} </div>
                <div className="restaurant-rating">
                    <Rating rating={restaurant.rating} />
                </div>
            </div>
            {/*RIGHT SIDE*/}
            <div className="restaurant-right">

                {/*min price*/}
                <div className="restaurant-price">
                    <div className="restaurant-right-title"> Cena minialna </div>
                    <div className="restaurant-right-props">{restaurant.minprice} </div>
                </div>
                {/* delivery*/}
                <div className="restaurant-delivery">
                    <div className="restaurant-right-title"> Dostawa </div>
                    <div className="restaurant-right-props">{restaurant.delivery}</div>
                </div>
                {/* distance*/}
                <div className="restaurant-distance">
                    <div className="restaurant-right-title">Dystans </div>
                    <div className="restaurant-right-props"> {restaurant.distance}</div>
                </div>
            </div>
        </div>
    );
};
export default RestaurantTag;