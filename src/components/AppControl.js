import React from "react";
import Customer from "./Customer";
import CustomButton from "./CustomButton";

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Customer",
      masterDrinkList: [
        {
          id: "thing1.1",
          name: "Name1.1",
          origin: "Iri",
          color: "1Pink",
          price: 250,
          stock: 50
        },
        {
          id: "thing1.2",
          name: "Name1.2",
          origin: "Iri",
          color: "1Pink",
          price: 250,
          stock: 124
        },
        {
          id: "thing1.3",
          name: "Name1.3",
          origin: "Iri",
          color: "1Pink",
          price: 250,
          stock: 124
        },
        {
          id: "thing2.1",
          name: "Name2.1",
          origin: "Rira",
          color: "2Orange",
          price: 250,
          stock: 50
        },
        {
          id: "thing2.2",
          name: "Name2.2",
          origin: "Rira",
          color: "2Orange",
          price: 250,
          stock: 124
        },
        {
          id: "thing2.3",
          name: "Name2.3",
          origin: "Rira",
          color: "2Orange",
          price: 250,
          stock: 124
        },
        {
          id: "thing3.1",
          name: "Name3.1",
          origin: "Azir",
          color: "3Yellow",
          price: 250,
          stock: 50
        },
        {
          id: "thing3.2",
          name: "Name3.2",
          origin: "Azir",
          color: "3Yellow",
          price: 250,
          stock: 124
        },
        {
          id: "thing3.3",
          name: "Name3.3",
          origin: "Azir",
          color: "3Yellow",
          price: 250,
          stock: 124
        },
        {
          id: "thing4.1",
          name: "Name4.1",
          origin: "Tukar",
          color: "4Auburn",
          price: 250,
          stock: 50
        },
        {
          id: "thing4.2",
          name: "Name4.2",
          origin: "Tukar",
          color: "4Auburn",
          price: 250,
          stock: 124
        },
        {
          id: "thing4.3",
          name: "Name4.3",
          origin: "Tukar",
          color: "4Auburn",
          price: 250,
          stock: 124
        },
        {
          id: "thing5.1",
          name: "Name5.1",
          origin: "Jah Keved",
          color: "5Red",
          price: 250,
          stock: 50
        },
        {
          id: "thing5.2",
          name: "Name5.2",
          origin: "Jah Keved",
          color: "5Red",
          price: 250,
          stock: 124
        },
        {
          id: "thing5.3",
          name: "Name5.3",
          origin: "Jah Keved",
          color: "5Red",
          price: 250,
          stock: 124
        },
        {
          id: "thing6.1",
          name: "Name6.1",
          origin: "Alethkar",
          color: "6Sapphire",
          price: 250,
          stock: 50
        },
        {
          id: "thing6.2",
          name: "Name6.2",
          origin: "Alethkar",
          color: "6Sapphire",
          price: 250,
          stock: 124
        },
        {
          id: "thing6.3",
          name: "Name6.3",
          origin: "Alethkar",
          color: "6Sapphire",
          price: 250,
          stock: 124
        },
        {
          id: "thing7.1",
          name: "Name7.1",
          origin: "Shinovar",
          color: "7Blue",
          price: 250,
          stock: 50
        },
        {
          id: "thing7.2",
          name: "Name7.2",
          origin: "Shinovar",
          color: "7Blue",
          price: 250,
          stock: 124
        },
        {
          id: "thing7.3",
          name: "Name7.3",
          origin: "Shinovar",
          color: "7Blue",
          price: 250,
          stock: 124
        },
        {
          id: "thing8.1",
          name: "Name8.1",
          origin: "Herdaz",
          color: "8Violet",
          price: 250,
          stock: 50
        },
        {
          id: "thing8.2",
          name: "Name8.2",
          origin: "Herdaz",
          color: "8Violet",
          price: 250,
          stock: 124
        },
        {
          id: "thing8.3",
          name: "Name8.3",
          origin: "Herdaz",
          color: "8Violet",
          price: 250,
          stock: 124
        },
        {
          id: "thing9.1",
          name: "Name9.1",
          origin: "Horneater Peaks",
          color: "9Clear",
          price: 250,
          stock: 50
        },
        {
          id: "thing9.2",
          name: "Name9.2",
          origin: "Horneater Peaks",
          color: "9Clear",
          price: 250,
          stock: 124
        },
        {
          id: "thing9.3",
          name: "Name9.3",
          origin: "Horneater Peaks",
          color: "9Clear",
          price: 250,
          stock: 124
        }
      ]
    };
  }

  switchView = () => {
    let newValue = "Customer";
    if(this.state.pageName === newValue){
      newValue = "Employee";
    }
    this.setState({pageName: newValue});
  }

  purchaseDrink = (drinkId) => {
    let tempMasterDrinkList = JSON.parse(JSON.stringify(this.state.masterDrinkList));
    const currentPosition = tempMasterDrinkList.findIndex(item => item.id === drinkId);
    if(currentPosition === -1){
      console.log("ERROR: AppControl-purchaseDrink: Id not in masterDrinkList");
    }else{
      let currentDrink = tempMasterDrinkList[currentPosition];
      if(currentDrink.stock < 1){
        console.log("ERROR: AppControl-purchaseDrink: Not enough stock of " + currentDrink.name);
      }else{
        currentDrink.stock = currentDrink.stock - 1;
        tempMasterDrinkList[currentPosition] = currentDrink;
        this.setState({
          masterDrinkList: tempMasterDrinkList
        });
      }
    }
  }


  render(){
    let currentlyVisibleComponent = null;
    let currentlyVisibleButton = null;

    if(this.state.pageName === "Customer") {
      currentlyVisibleComponent = <Customer drinkList={this.state.masterDrinkList} orderFunction={this.purchaseDrink} />;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Employee View" />;
    } else if(this.state.pageName === "Employee") {
      currentlyVisibleComponent = <h2>Employee View</h2>;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Customer View" />;
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