import React, { Component } from "react";
import Quiz from "./quizLogic.jsx";
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
        submitted: this.props.location.state.submitted,
        filename: this.props.location.state.filename,
        questions: this.props.location.state.questions
      };
    } catch (err) {
      console.log(
        "checklist manager couldn't get details from location prop..."
      );
      this.state = { submitted: false };
    }

    //now, set other vars based on whether this is a NEW or PREVIOUSLY SUBMITTED Quiz
    if (this.state.submitted) {
      this.state.selections = this.props.location.state.selections;
    } else {
      this.state.selections = undefined;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSave(selections) {
    this.setState({ submitted: true });

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    await IndexedDataBase.addQuizSave(
      this.state.filename,
      this.state.questions,
      selections,
      time
    );
  }

  render() {
    return (
      <Quiz
        questions={this.state.questions}
        handleSave={this.handleSubmit}
        selections={this.state.selections}
        submitted={this.state.submitted}
      ></Quiz>
    );
  }
}

export default withRouter(QuizSubmissionManager);
