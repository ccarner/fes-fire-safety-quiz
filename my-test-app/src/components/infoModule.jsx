import React, { Component } from "react";
// import ReactDOM from "react-dom";

import InfoModuleMain from "./infoModules/infoModuling";


class InfoModulePage extends Component {


  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> </h1>
        <InfoModuleMain />
      </React.Fragment>
    );
  }
}

// ReactDOM.render(<InfoModulePage />, document.getElementById("root"));
export default InfoModulePage;
