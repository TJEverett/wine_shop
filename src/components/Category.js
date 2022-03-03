import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";
import CustomButton from "./CustomButton";

function Category(props) {
  const table = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
  };

  if(props.drinkList.length === 0) {
    return(null);
  } else {
    return(
      <React.Fragment>
        <h2 className="center">{props.headerText}</h2>
        <h4 className="center">{props.subHeaderText}</h4>
        <div style={table}>
          {props.drinkList.map((drink) =>
            <div className={`cell ${props.drinkStyle}`} key={drink.id}>
              <Drink name={drink.name}
              origin={drink.origin}
              price={drink.price}
              stock={stockConvert(drink.stock)} />
              {props.buttonList.map((button, index) => 
                <CustomButton whenClicked={() => button.func(drink.id)} disabledState={false} buttonText={button.text} key={index} />
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

function stockConvert(number) {
  return (number >= 50) ? "High" : (number > 0) ? "Limited" : "Out of Stock";
}

Category.defaultProps = {
  drinkList: [],
  buttonList: []
}

Category.propTypes = {
  drinkList: PropTypes.array,
  buttonList: PropTypes.array,
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
  drinkStyle: PropTypes.string
}

export default Category;