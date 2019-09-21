import React, { Component } from "react";
import ReactDOM from "react-dom";

import CheckSelectionFormat from './checklist/checklist_selection_format';



class InfoModulePage extends Component {





  state = {};
  render() {
    return (

      <React.Fragment>
        <h1>Fire Safty Checklist</h1>

        <CheckSelectionFormat />


      </React.Fragment>

    );
  }
}

ReactDOM.render(<InfoModulePage />, document.getElementById("root"));
export default InfoModulePage;
