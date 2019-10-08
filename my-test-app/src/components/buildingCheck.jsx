import React, { Component } from "react";
import AllChecklists from "./checklist/checklisting";


// This class simply renders all checklists
class CheckListPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <a href="/app/helppage#S2">Not sure how to use this?</a> */}

        <h1> </h1>
        <AllChecklists />
      </React.Fragment>
    );
  }
}

export default CheckListPage;
