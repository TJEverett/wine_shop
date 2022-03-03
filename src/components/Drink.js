import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  let colorText = "";
  if(props.color !== null){
    colorText = "Color: " + props.color;
  }

  return(
    <React.Fragment>
      <p><strong>{props.name}</strong></p>
      <p>Origin: {props.origin}</p>
      <p>{colorText}</p>
      <p>Price: {props.price}</p>
      <p>Stock: {props.stock}</p>
    </React.Fragment>
  );
}

Drink.defaultProps = {
  color: null
}

Drink.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.string
}

export default Drink;