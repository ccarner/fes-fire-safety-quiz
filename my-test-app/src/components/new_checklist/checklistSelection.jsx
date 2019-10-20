import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IndexedDataBase from "../../dataStorage.js";
import CompletedChecklistDescription from "./completedChecklistDescription.jsx";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ChecklistCompletionPopup from "./checklistCompletionPopup.jsx";
import ContentMenu from "../ContentMenu.jsx";
import { Link, Redirect } from "react-router-dom";

class ChecklistSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: undefined,
      selectedFilename: undefined,
      previousCompletions: undefined,
      contentToDisplay: undefined,
      restoredValues: undefined
    };
    this.getContent = this.getContent.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.apiUrl =
      "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/checklists/";
  }

  // get the index to display what content exists
  componentDidMount() {
    axios
      .get(this.apiUrl + "index.json")
      .then(response => {
        this.setState({ index: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //gets the actual questions or other when actually viewing the content
  //gets the currently selected resource
  getContent() {
    var contentUrl = this.apiUrl + this.state.selectedFilename;
    console.log("getting content wit URL", contentUrl);
    axios.get(contentUrl).then(response => {
      this.setState({ contentToDisplay: response.data });
    });
  }

  //when choosing a checklist from the menu
  //not getting content yet, just a preliminary popup or other.
  handleSelectOption(option) {
    IndexedDataBase.getChecklistSave(this.state.selectedFilename).then(
      results => {
        this.setState({ previousCompletions: results });
        this.setState({ selectedFilename: option });
      }
    );
  }

  // values which we need to restore are set here
  handleRestore(valuesToRestore) {
    //populate the content from the server
    console.log("about to handle restore", this.stae);
    this.getContent();
    //the previous completion was stored locally, set it here
    this.setState({ restoredValues: valuesToRestore });
  }

  //unselect the content
  handleDialogClose() {
    this.setState({
      selectedFilename: undefined,
      previousCompletions: undefined
    });
  }

  render() {
    if (this.state.contentToDisplay) {
      return (
        <Redirect
          push
          to={{
            pathname: "/completeChecklist",
            state: {
              content: this.state.contentToDisplay,
              filename: this.state.selectedFilename,
              restoredValues: this.state.restoredValues
            }
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <ContentMenu
          menuOptions={this.state.index}
          handleClickOpen={this.handleSelectOption}
        />
        {this.state.selectedFilename && (
          <ChecklistCompletionPopup
            previousCompletions={this.state.previousCompletions}
            handleClose={this.handleDialogClose}
            handleRestore={this.handleRestore}
            handleNewContent={this.getContent}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ChecklistSelection;
