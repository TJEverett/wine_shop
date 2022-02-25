import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  let stock = (props.stock >= 50) ? "High"
            : (props.stock > 0) ? "Limited"
            : "Out of Stock";

  return(
    <React.Fragment>
      <p><strong>{props.name}</strong></p>
      <p>Origin: {props.origin}</p>
      <p>Price: {props.price}</p>
      <p>Stock: {stock}</p>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number
}

export default Drink;