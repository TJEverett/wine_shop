import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";
import Form from "./Form";
import CustomButton from "./CustomButton";

function Employee(props) {
  //Functional Logic
  const drinkColorKey = ["pink", "orange", "yellow", "auburn", "red", "sapphire", "blue", "violet", "white"];
  let drinkListCopy = JSON.parse(JSON.stringify(props.drinkList));
  drinkListCopy.sort((a, b) => (a.stock > b.stock) ? 1 : (a.stock === b.stock) ? ((a.color > b.color) ? 1 : (a.color === b.color) ? 0 : -1) : -1);
  
  //CSS Logic
  const tableOne = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr"
  };
  const tableTwo = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  };

  return(
    <React.Fragment>
      <h2 className="center">Employee Page</h2>
      <div style={tableOne}>
        <div style={tableTwo}>
          {drinkListCopy.map((drink) =>
            <div className={`cell ${drinkColorKey[drink.color[0] - 1]}`} key={drink.id}>
              <Drink name={drink.name}
              origin={drink.origin}
              price={drink.price}
              stock={drink.stock.toString()} />
              <CustomButton whenClicked={() => props.restockFunction(drink.id, 124)} disabledState={false} buttonText="Add 1 Keg" />
              <CustomButton whenClicked={() => props.deleteFunction(drink.id)} disabledState={false} buttonText="Delete" />
            </div>
          )}
        </div>
        <Form onNewDrinkCreation={props.newDrinkFunction} />
      </div>
    </React.Fragment>
  )
}

Employee.defaultProps = {
  drinkList: []
}

Employee.propTypes = {
  drinkList: PropTypes.array,
  newDrinkFunction: PropTypes.func,
  deleteFunction: PropTypes.func,
  restockFunction: PropTypes.func
}

export default Employee;