import React, { Component } from "react";
import CheckBee from "./checklist/checkComponent";

class CheckListPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>CheckList page</h1>
        <CheckBee />
      </React.Fragment>
    );
  }
}

export default CheckListPage;
