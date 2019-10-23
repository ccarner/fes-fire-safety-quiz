import React, { Component } from "react";
import StandardPaper from "./uiComponents/standardPaper.jsx";
import IndexedDataBase from "../dataStorage.js";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showHiddenContent: false };
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);

    IndexedDataBase.getPreference("showHiddenContent").then(values => {
      let showHiddenContent = values[0].value;
      if (showHiddenContent === true || showHiddenContent === false) {
        this.state.showHiddenContent = showHiddenContent;
      }
    });
  }

  handleToggleSwitch(preferenceName) {
    this.setState(prevState => {
      IndexedDataBase.setPreference(
        "showHiddenContent",
        !prevState[preferenceName]
      );
      return { [preferenceName]: !prevState[preferenceName] };
    });
  }

  render() {
    return (
      <StandardPaper>
        <Typography>Show Hidden Content:</Typography>
        <Switch
          checked={this.state.showHiddenContent}
          onChange={() => {
            this.handleToggleSwitch("showHiddenContent");
          }}
          value="showHiddenContent"
          color="primary"
        />
      </StandardPaper>
    );
  }
}

export default SettingsPage;
