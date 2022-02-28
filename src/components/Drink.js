import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  return(
    <React.Fragment>
      <p><strong>{props.name}</strong></p>
      <p>Origin: {props.origin}</p>
      <p>Price: {props.price}</p>
      <p>Stock: {props.stock}</p>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.string
}

export default Drink;