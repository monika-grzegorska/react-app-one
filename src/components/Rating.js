import styles from "./css/Rating.css";
import React from "react";
import ReactDOM from 'react-dom';

function Rating(input) {
    // Get input parameter from parent component
    var ratingNumber = input.rating;
    // Create an empty list to hold react components representing divs / stars
    var starHtmlElements = [];
    // Loop X Times (where X is rating number we got from parent restaurant)
    for (var i = 0; i < 5; i++) {
        if (i < ratingNumber) {
            starHtmlElements.push(<div className='star' key={i}></div>);
        } else {
            starHtmlElements.push(<div className='star gray' key={i}></div>);
        }
    }


    // Return list to hold react components representing divs / stars
    return starHtmlElements;
};
export default Rating;