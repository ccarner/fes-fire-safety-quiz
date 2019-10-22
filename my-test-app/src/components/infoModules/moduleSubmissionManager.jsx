import React, { Component } from "react";
import Module from "./module.jsx";
import { withRouter } from "react-router";

//this component manages the logic for submitting, but also for
//getting input props from the location prop (using withLocation higher order component)
class ChecklistSubmissionManager extends Component {
  constructor(props) {
    super(props);
    try {
      // should always be able to get these, whether submitted or fresh...
      this.state = {
        filename: this.props.location.state.filename,
        questions: this.props.location.state.content
      };
    } catch (err) {
      console.log("module manager couldn't get details from location prop...");
      this.state = {};
    }

    //now, set other vars based on whether this is a NEW or PREVIOUSLY SUBMITTED checklist
    if (this.props.location.state.restoredValues) {
      this.state.comment = this.props.location.state.restoredValues.comment;
      this.state.selections = this.props.location.state.restoredValues.selections;
      this.state.submitted = true;
    } else {
      this.state.comment = undefined;
      this.state.selections = undefined;
    }
  }

  render() {
    return <Module htmlstring={this.props.location.state.content}></Module>;
  }
}

export default withRouter(ChecklistSubmissionManager);
