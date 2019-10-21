import React from "react";
import IndexedDataBase from "../../dataStorage.js";
import QuizSelectedPopup from "./quizSelectedPopup.jsx";
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
      <QuizSelectedPopup
        previousCompletions={this.state.previousCompletions}
        handleClose={this.handleDialogClose}
        handleRestore={this.handleRestore}
        handleNewContent={this.getContent}
      />
    );
  }
}

export default QuizSelection;
