import React from "react";
import styles from "./css/RestaurantTag.css";
import Rating from "./Rating"
import { Route} from 'react-router-dom'
import { withRouter } from 'react-router';

class RestaurantTag extends React.Component  {

    constructor(input) {
        super(input);

        this.state = {
            restaurant: input.restaurant,
            handleTagClick: handleTagClick
        };    
        
        function handleTagClick(e) {
            e.preventDefault();
            input.history.push('/restaurant/' + input.restaurant.id);
        } 
    };

    render() {
        return (
            <div className="restaurant-tag" onClick={this.state.handleTagClick } >
                {/*LEFT SIDE*/ }
                < div className= "restaurant-left" >
                    <img className="restaurant-logo" src={this.state.restaurant.photo} />
                    <div className="restaurant-name"> {this.state.restaurant.name} </div>
                    <div className="restaurant-type"> {this.state.restaurant.type} </div>
                    <div className="restaurant-rating">
                        <Rating rating={this.state.restaurant.rating} />
                    </div>
                </div >
                {/*RIGHT SIDE*/ }
                < div className= "restaurant-right" >

                    {/*min price*/ }
                    < div className= "restaurant-price" >
                        <div className="restaurant-right-title"> Cena minialna </div>
                        <div className="restaurant-right-props">£ {this.state.restaurant.minPrice}</div>
                    </div >
                {/* delivery*/ }
                < div className= "restaurant-delivery" >
                    <div className="restaurant-right-title"> Dostawa </div>
                    <div className="restaurant-right-props">£ {this.state.restaurant.delivery}</div>
                    </div >
                {/* distance*/ }
                < div className= "restaurant-distance" >
                    <div className="restaurant-right-title">Dystans </div>
                    <div className="restaurant-right-props">{this.state.restaurant.distance} km</div>
                    </div >
                </div >
            </div >
        );
    };
 
};
export default withRouter(RestaurantTag);