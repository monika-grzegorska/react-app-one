import React from "react";
import styles from "./css/List.css";

class List extends React.Component {
    render() {
        let restaurants = [
            { photo: <a href="https://cdn.pizzaportal.pl/20000239/logo/e04718c2fef2c41c72b6e4b431d16e26/logo.png"/> , name: "Bistro Pado", type: "Pizza", minprice: "19 zł", delivery: "5 zł", distance: "2.5 km" },
        ];

        return (
            <div className="list">
            <ul>
                {restaurants.map(restaurant => (
                    <li>
                        {restaurant.photo} Nazwa {restaurant.name} typ {resturant.type} Cena minialna  {restaurant.minprice} Dostawa  {restaurant.delivery} Dystans {restaurant.distance} 
          </li>
                ))}
            </ul>
                </div>
        );
    }
}

export default List;