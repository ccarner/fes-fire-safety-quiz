import React, { Component } from "react";
// import CheckBewe from "./checklist/checkComponent";
import CheckBewe from "./checklist/checklisting";

class CheckListPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>CheckList page</h1>
        <CheckBewe />
      </React.Fragment>
    );
  }
}

export default CheckListPage;
