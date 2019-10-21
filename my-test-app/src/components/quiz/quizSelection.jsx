import React from "react";
import IndexedDataBase from "../../dataStorage.js";
import QuizCompletionPopup from "./quizCompletionPopup.jsx";
import AbstractSelection from "../abstractSelection.jsx";

class QuizSelection extends AbstractSelection {
  constructor(props) {
    super(props);
    this.apiUrl =
      "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/quizzes/";
    this.getSaves = IndexedDataBase.getQuizSaves;
    this.contentForwardUrl = "/completeQuiz";
  }

  renderContentSelected() {
    return (
      <QuizCompletionPopup
        previousCompletions={this.state.previousCompletions}
        handleClose={this.handleDialogClose}
        handleRestore={this.handleRestore}
        handleNewContent={this.getContent}
      />
    );
  }
}

export default QuizSelection;
