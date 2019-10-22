import React, { Component } from "react";
import axios from "axios";
import ContentMenu from "./ContentMenu.jsx";
import { Redirect } from "react-router-dom";

class AbstractSelection extends Component {
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
    axios.get(contentUrl).then(response => {
      this.setState({ contentToDisplay: response.data });
    });
  }

  //when choosing a checklist from the menu
  //not getting content yet, just a preliminary popup or other.
  handleSelectOption(filename) {
    // if we don't want to save, won't have a save function
    if (this.getSaves) {
      this.getSaves(filename).then(results => {
        this.setState({
          previousCompletions: results,
          selectedFilename: filename
        });
      });
    } else {
      this.setState({
        selectedFilename: filename
      });
    }
  }

  // values which we need to restore are set here
  handleRestore(valuesToRestore) {
    //populate the content from the server
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
            pathname: this.contentForwardUrl,
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
        {this.state.selectedFilename && this.renderContentSelected()}
      </React.Fragment>
    );
  }
}

export default AbstractSelection;
