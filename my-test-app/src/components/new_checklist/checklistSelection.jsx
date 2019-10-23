import React from "react";
import IndexedDataBase from "../../dataStorage.js";
import ChecklistSelectedPopup from "./checklistSelectedPopup.jsx";
import AbstractSelection from "../abstractSelection.jsx";

class ChecklistSelection extends AbstractSelection {
  constructor(props) {
    super(props);
    this.apiUrl =
      "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/checklists/";
    this.getSaves = IndexedDataBase.getChecklistSaves;
    this.contentForwardUrl = "/completeChecklist";
  }

  renderContentSelected() {
    return (
      <ChecklistSelectedPopup
        previousCompletions={this.state.previousCompletions}
        fileObject={this.state.selectedFileObject}
        handleClose={this.handleDialogClose}
        handleRestore={this.handleRestore}
        handleNewContent={this.getContent}
      />
    );
  }
}

export default ChecklistSelection;
