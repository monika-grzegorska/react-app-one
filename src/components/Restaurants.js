import React from "react";
import styles from "./css/Restaurants.css";
import _ from "lodash";
import RestaurantTag from "./RestaurantTag";

class Restaurants extends React.Component {

    constructor(input) {
        debugger;
        super(input);
        this.state = {
            restaurantListItems: null,
            foodType: input.match.params.foodType
        };

        fetch("http://localhost:56423/api/restaurants")
            .then(res => res.json())
            .then((restaurantsFiltered) => {
                debugger;
                if (this.state.foodType != 'all') {
                    restaurantsFiltered = _.filter(restaurantsFiltered, { 'type': this.state.foodType });
                } 

                const listItems = restaurantsFiltered.map((restaurant) =>
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
            <div className="restaurants">
                <ul className="restaurants-listitems">{this.state.restaurantListItems}</ul>
            </div>
        );
    }
};
export default Restaurants;