import React from "react";

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Customer"
    };
  }

  switchView = () => {
    let newValue = "Customer";
    if(this.state.pageName === newValue){
      newValue = "Employee";
    }
    this.setState({pageName: newValue});
  }




  render(){
    let currentlyVisibleComponent = null;
    let currentlyVisibleButton = null;

    if(this.state.pageName === "Customer") {
      currentlyVisibleComponent = <h2>Customer Menu</h2>;
      currentlyVisibleButton = <button onClick={this.switchView}>Change to Employee View</button>;
    } else if(this.state.pageName === "Employee") {
      currentlyVisibleComponent = <h2>Employee View</h2>;
      currentlyVisibleButton = <button onClick={this.switchView}>Change to Customer Menu</button>;
    } else {
      currentlyVisibleComponent = <h2>Page Broke</h2>;
      currentlyVisibleButton = <button onClick={this.switchView}>Attempt to Fix</button>
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