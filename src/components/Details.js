import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

function Details(props){
  const drinkColorKey = ["Pink", "Orange", "Yellow", "Auburn", "Red", "Sapphire", "Blue", "Violet", "White"];
  const color = drinkColorKey[props.drink.color[0] - 1];

  return(
    <React.Fragment>
      <h2>Details View</h2>
      <div className={`cell ${color.toLowerCase()}`}>
        <Drink name={props.drink.name}
        origin={props.drink.origin}
        color={color}
        price={props.drink.price}
        stock={props.drink.stock + " Pints"} />
      </div>
    </React.Fragment>
  );
}

Details.propTypes = {
  drink: PropTypes.object
}

export default Details;