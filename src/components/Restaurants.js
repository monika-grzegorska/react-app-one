import React from "react";
import styles from "./css/Restaurants.css";
import _ from "lodash";
import RestaurantTag from "./RestaurantTag";
import LeftMenu from "./LeftMenu";

class Restaurants extends React.Component {

    constructor(input) {
        super(input);
      //  this.onChange = this.onChange.bind(this);
        this.state = {
            restaurantListItems: null,
            foodType: input.match.params.foodType
        };

        fetch("http://localhost:56423/api/restaurants")
            .then(res => res.json())
            .then((restaurants) => {
                // wprowadzamy zmienna pomocnicza ktora skraca kod
                var ifFoodTypePresentAndNotEmpty = this.state.foodType != 'all' && this.state.foodType != null;
                // lodash o nazwie filter sluzy do przeskanowania informacji i 
                // w tym wypadku po wybraniu konkretnego typu kuchni
                // do wyswietleni listy

                // dokumentacja lodash : https://lodash.com/docs/4.17.10

                // jesli na liscie naszych restauracji jest taka
                // ktora serwuje podany typ jedzenia 
                // poprzez przefiltrowanie odnajdz dany typ
            
                if (ifFoodTypePresentAndNotEmpty) {
                    restaurants = _.filter(restaurants, { 'type': this.state.foodType });
                } 

                // tworzy liste restauracji 
                const listItems = restaurants.map((restaurant) =>
                    <li className="restaurant-li" key={restaurant.id}>
                        <RestaurantTag restaurant={restaurant} />
                    </li>
                );

                this.setState({
                    restaurantListItems: listItems
                });
            }),
            (error) => {
                console.log(error);
            };
    }
       
    render(){
        return (
            <div> <LeftMenu/> 
            <div className="restaurants">
                <ul className="restaurants-listitems">{this.state.restaurantListItems}</ul>
            </div>
            </div>
        );
    }
};
export default Restaurants;