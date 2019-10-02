import React, { Component } from "react";
import AllChecklists from "./checklist/checklisting";


// This class simply renders all  checklists
class CheckListPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> </h1>
        <AllChecklists />
      </React.Fragment>
    );
  }
}

export default CheckListPage;
