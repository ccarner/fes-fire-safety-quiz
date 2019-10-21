import React, { Component } from "react";
import Quiz from "./quizLogic.js";
import IndexedDataBase from "../../dataStorage.js";
import { withRouter } from "react-router";

//this component manages the logic for submitting, but also for
//getting input props from the location prop (using withLocation higher order component)
class QuizSubmissionManager extends Component {
  constructor(props) {
    super(props);
    try {
      // should always be able to get these, whether submitted or fresh...
      this.state = {
        filename: this.props.location.state.filename,
        questions: this.props.location.state.content.quiz_questions
      };
    } catch (err) {
      console.log("quiz manager couldn't get details from location prop...");
    }

    //now, set other vars based on whether this is a NEW or PREVIOUSLY SUBMITTED checklist
    if (this.props.location.state.restoredValues) {
      this.state.comment = this.props.location.state.restoredValues.comment;
      this.state.selections = this.props.location.state.restoredValues.selections;
      this.state.submitted = true;
    } else {
      this.state.selections = undefined;
      this.state.submitted = false;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(selections) {
    this.setState({ submitted: true });

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    await IndexedDataBase.addQuizSave(this.state.filename, selections, time);
  }

  render() {
    console.log(this.state);
    return (
      <Quiz
        questions={this.state.questions}
        handleSubmit={this.handleSubmit}
        selections={this.state.selections}
        submitted={this.state.submitted}
      ></Quiz>
    );
  }
}

export default withRouter(QuizSubmissionManager);
