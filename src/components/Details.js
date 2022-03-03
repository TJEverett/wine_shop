import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";
import CustomButton from "./CustomButton";

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
        <CustomButton whenClicked={() => props.orderFunction(props.drink.id, 1)} disabledState={false} buttonText="Order 1" />
      </div>
    </React.Fragment>
  );
}

Details.propTypes = {
  drink: PropTypes.object,
  orderFunction: PropTypes.func
}

export default Details;