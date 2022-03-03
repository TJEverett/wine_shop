import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Form(props) {
  function handleNewDrinkSubmit(event) {
    event.preventDefault();
    if(event.target.color.value !== "Default"){
      props.onNewDrinkCreation({id: v4(), name: event.target.drinkName.value, origin: event.target.origin.value, color: event.target.color.value, price: parseInt(event.target.price.value), stock: parseInt(event.target.stock.value * 124)});
    }else{
      alert("No Color Chosen");
    }
  }

  return (
    <React.Fragment>
      <div className="cell">
        <form onSubmit={handleNewDrinkSubmit}>
          <label>
            Drink Name:
            <input
              type="text"
              required
              name="drinkName"
              placeholder="Drink Name" />
          </label>
          <br/>
          <label>
            Region of Origin:
            <input
              type="text"
              required
              name="origin"
              placeholder="Alethkar" />
          </label>
          <br />
          <label>
            Wine Color:
            <select name="color" required defaultValue="Default">
              <option disabled value="Default">Color</option>
              <option value="1Pink" title="Floral, Aids alertness">Pink</option>
              <option value="2Orange" title="Fruity with notes of ginger">Orange</option>
              <option value="3Yellow" title="Bold & deep without guilt">Yellow</option>
              <option value="4Auburn" title="Spicy taste with an earthy aroma">Auburn</option>
              <option value="5Red" title="Flavorful with a pleasant burn">Red</option>
              <option value="6Sapphire" title="Nutty taste with hints of honey">Sapphire</option>
              <option value="7Blue" title="Complex notes of berry & lemon">Blue</option>
              <option value="8Violet" title="Spiced sandalwood aroma">Violet</option>
              <option value="9Clear" title="Not actually wine">Other</option>
            </select>
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              required
              min={1}
              step={1}
              name="price"
              placeholder="$$$" />
          </label>
          <br />
          <label>
            Starting Stock in Kegs:
            <input
              type="number"
              required
              min={0}
              step={1}
              name="stock"
              placeholder="## of Kegs" />
          </label>
          <br />
          <button type="submit">Add to Menu</button>
        </form>
      </div>
    </React.Fragment>
  );
}

Form.propTypes = {
  onNewDrinkCreation: PropTypes.func
}

export default Form;