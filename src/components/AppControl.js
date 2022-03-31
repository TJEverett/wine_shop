import React from "react";
import Customer from "./Customer";
import Employee from "./Employee";
import Details from "./Details";
import CustomButton from "./CustomButton";

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Customer",
      masterDrinkList: [
        {
          id: "example1",
          name: "Rose",
          origin: "Iri",
          color: "1Pink",
          price: 250,
          stock: 12
        },
        {
          id: "example2",
          name: "Naval",
          origin: "Rira",
          color: "2Orange",
          price: 250,
          stock: 0
        },
        {
          id: "example3",
          name: "Ruby",
          origin: "Jah Keved",
          color: "5Red",
          price: 250,
          stock: 83
        },
        {
          id: "example4",
          name: "Blush",
          origin: "Jah Keved",
          color: "5Red",
          price: 250,
          stock: 496
        },
        {
          id: "example5",
          name: "Horneater White",
          origin: "Horneater Peaks",
          color: "9Clear",
          price: 250,
          stock: 124
        }
      ],
      selectedDrink: null
    };
  }

  switchView = () => {
    let newValue = "Customer";
    if(this.state.pageName === newValue){
      newValue = "Employee";
    }
    this.setState({
      pageName: newValue,
      selectedDrink: null
    });
  }

  detailSelect = (drinkId) => {
    const selectedDrink = this.state.masterDrinkList.filter(drink => drink.id === drinkId)[0];
    this.setState({
      pageName: "Details",
      selectedDrink: selectedDrink
    });
  }

  createDrink = (newDrink) => {
    const newMasterDrinkList = this.state.masterDrinkList.concat(newDrink);
    this.setState({
      masterDrinkList: newMasterDrinkList
    });
  }

  deleteDrink = (drinkId) => {
    const newMasterDrinkList = this.state.masterDrinkList.filter(drink => drink.id !== drinkId);
    this.setState({
      masterDrinkList: newMasterDrinkList
    });
  }

  changeDrinkStock = (drinkId, amountChanged) => {
    let tempMasterDrinkList = JSON.parse(JSON.stringify(this.state.masterDrinkList));
    const currentPosition = tempMasterDrinkList.findIndex(drink => drink.id === drinkId);
    if(currentPosition === -1){
      console.log("ERROR: AppControl-changeDrinkStock: Id not in masterDrinkList");
    }else{
      let currentDrink = tempMasterDrinkList[currentPosition];
      if((currentDrink.stock + amountChanged) < 0){
        console.log("ERROR: AppControl-changeDrinkStock: Not enough stock of " + currentDrink.name);
      }else{
        currentDrink.stock = currentDrink.stock + amountChanged;
        tempMasterDrinkList[currentPosition] = currentDrink;
        this.setState({
          masterDrinkList: tempMasterDrinkList
        });
      }
    }
  }

  render(){
    const customerButtonArray = [
      {func: (drinkId) => this.changeDrinkStock(drinkId, -1), text: "Order 1"},
      {func: this.detailSelect, text: "View Details"}
    ];

    let currentlyVisibleComponent = null;
    let currentlyVisibleButton = null;

    if(this.state.pageName === "Customer") {
      currentlyVisibleComponent = <Customer drinkList={this.state.masterDrinkList} buttonArray={customerButtonArray} />;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Employee View" />;
    } else if(this.state.pageName === "Employee") {
      currentlyVisibleComponent = <Employee drinkList={this.state.masterDrinkList} newDrinkFunction={this.createDrink} deleteFunction={this.deleteDrink} restockFunction={this.changeDrinkStock}/>;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Customer View" />;
    } else if(this.state.selectedDrink !== null) {
      currentlyVisibleComponent = <Details drink={this.state.selectedDrink} />;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Return to Menu" />
    } else {
      currentlyVisibleComponent = <h2>Page Broke</h2>;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Attempt to Fix" />;
    }

    return(
      <React.Fragment>
        {currentlyVisibleButton}
        {currentlyVisibleComponent}
      </React.Fragment>
    )
  }

}

export default AppControl