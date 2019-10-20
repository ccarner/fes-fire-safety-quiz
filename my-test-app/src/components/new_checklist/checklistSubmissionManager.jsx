import React, { Component } from "react";
import Checklist from "./checklist.jsx";
import IndexedDataBase from "../../dataStorage.js";
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
      console.log(
        "checklist manager couldn't get details from location prop..."
      );
      this.state = { submitted: false, comment: undefined };
    }

    //now, set other vars based on whether this is a NEW or PREVIOUSLY SUBMITTED checklist
    console.log("locationstate", this.props.location.state.restoredValues);
    if (this.props.location.state.restoredValues) {
      this.state.comment = this.props.location.state.restoredValues.comment;
      this.state.selections = this.props.location.state.restoredValues.selections;
      this.state.submitted = true;
    } else {
      this.state.comment = undefined;
      this.state.selections = undefined;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("state of the manager", this.state);
  }

  async handleSubmit(selections, comment) {
    this.setState({ submitted: true });

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    console.log(
      "submitting",
      this.state.filename,
      this.state.questions,
      selections,
      comment,
      time
    );
    await IndexedDataBase.addChecklistSave(
      this.state.filename,
      this.state.questions,
      selections,
      comment,
      time
    );
  }

  render() {
    console.log("submission mamanger", this.state, this.props);
    return (
      <Checklist
        questions={this.state.questions}
        handleSubmit={this.handleSubmit}
        selections={this.state.selections}
        submitted={this.state.submitted}
        comment={this.state.comment}
      ></Checklist>
    );
  }
}

export default withRouter(ChecklistSubmissionManager);
