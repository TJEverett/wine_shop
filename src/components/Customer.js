import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

class Customer extends React.Component {
  constructor(props){
    super(props);

    let tempPinkList = [];
    let tempOrangeList = [];
    let tempYellowList = [];
    let tempAuburnList = [];
    let tempRedList = [];
    let tempSapphireList = [];
    let tempBlueList = [];
    let tempVioletList = [];
    let tempOthersList = [];

    this.props.drinkList.map((drink) => {
      (drink.color === "1Pink") ? tempPinkList.push(drink)
      : (drink.color === "2Orange") ? tempOrangeList.push(drink)
      : (drink.color === "3Yellow") ? tempYellowList.push(drink)
      : (drink.color === "4Auburn") ? tempAuburnList.push(drink)
      : (drink.color === "5Red") ? tempRedList.push(drink)
      : (drink.color === "6Sapphire") ? tempSapphireList.push(drink)
      : (drink.color === "7Blue") ? tempBlueList.push(drink)
      : (drink.color === "8Violet") ? tempVioletList.push(drink)
      : tempOthersList.push(drink);
      return null;
    });

    this.state = {
      updateAgain: false,
      pinkList: tempPinkList,
      orangeList: tempOrangeList,
      yellowList: tempYellowList,
      auburnList: tempAuburnList,
      redList: tempRedList,
      sapphireList: tempSapphireList,
      blueList: tempBlueList,
      violetList: tempVioletList,
      othersList: tempOthersList
    };
  };

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps !== this.props){
      return true;
    }else if(nextState.updateAgain){
      return true;
    } else {
      return false;
    }
  }
  
  componentDidUpdate(){
    this.buildMenu();
  }

  render(){
    const buttonArray = [{func: (drinkId) => this.props.orderFunction(drinkId, -1), text: "Order 1"}];
    return(
      <React.Fragment>
        <Category drinkList={this.state.pinkList} headerText="Pink Wines" subHeaderText="Floral, Aids alertness" drinkStyle="pink" buttonList={buttonArray} />
        <Category drinkList={this.state.orangeList} headerText="Orange Wines" subHeaderText="Fruity with notes of ginger" drinkStyle="orange" buttonList={buttonArray} />
        <Category drinkList={this.state.yellowList} headerText="Yellow Wines" subHeaderText="Bold & deep without guilt" drinkStyle="yellow" buttonList={buttonArray} />
        <Category drinkList={this.state.auburnList} headerText="Auburn Wines" subHeaderText="Spicy taste with an earthy aroma" drinkStyle="auburn" buttonList={buttonArray} />
        <Category drinkList={this.state.redList} headerText="Red Wines" subHeaderText="Flavorful with a pleasant burn" drinkStyle="red" buttonList={buttonArray} />
        <Category drinkList={this.state.sapphireList} headerText="Sapphire Wines" subHeaderText="Nutty taste with hints of honey" drinkStyle="sapphire" buttonList={buttonArray} />
        <Category drinkList={this.state.blueList} headerText="Blue Wines" subHeaderText="Complex notes of berry & lemon" drinkStyle="blue" buttonList={buttonArray} />
        <Category drinkList={this.state.violetList} headerText="Violet Wines" subHeaderText="Spiced sandalwood aroma" drinkStyle="violet" buttonList={buttonArray} />
        <Category drinkList={this.state.othersList} headerText="Other Drinks" subHeaderText="Not actually wine" drinkStyle="white" buttonList={buttonArray} />
      </React.Fragment>
    );
  }

  buildMenu = () => {
    let pinkList = [];
    let orangeList = [];
    let yellowList = [];
    let auburnList = [];
    let redList = [];
    let sapphireList = [];
    let blueList = [];
    let violetList = [];
    let othersList = [];

    this.props.drinkList.map((drink) => {
      (drink.color === "1Pink") ? pinkList.push(drink)
      : (drink.color === "2Orange") ? orangeList.push(drink)
      : (drink.color === "3Yellow") ? yellowList.push(drink)
      : (drink.color === "4Auburn") ? auburnList.push(drink)
      : (drink.color === "5Red") ? redList.push(drink)
      : (drink.color === "6Sapphire") ? sapphireList.push(drink)
      : (drink.color === "7Blue") ? blueList.push(drink)
      : (drink.color === "8Violet") ? violetList.push(drink)
      : othersList.push(drink);
      return null;
    });

    this.setState(prevState => ({
      updateAgain: !prevState.updateAgain,
      pinkList: pinkList,
      orangeList: orangeList,
      yellowList: yellowList,
      auburnList: auburnList,
      redList: redList,
      sapphireList: sapphireList,
      blueList: blueList,
      violetList: violetList,
      othersList: othersList
    }));
  }
}

Customer.defaultProps = {
  drinkList: []
}

Customer.propTypes = {
  drinkList: PropTypes.array,
  orderFunction: PropTypes.func
}

export default Customer;