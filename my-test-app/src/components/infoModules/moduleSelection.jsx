import React from "react";
import IndexedDataBase from "../../dataStorage.js";
import ModuleSelectedPopup from "./moduleSelectedPopup.jsx";
import AbstractSelection from "../abstractSelection.jsx";

class ModuleSelection extends AbstractSelection {
  constructor(props) {
    super(props);
    this.apiUrl =
      "http://fes-fire-safety-quiz-api-dev.ap-southeast-2.elasticbeanstalk.com/content/modules/";

    //not restoring any saves for info modules currently
    this.getSaves = undefined;
    this.contentForwardUrl = "/completeModule";
  }

  renderContentSelected() {
    return (
      this.getContent()
      // <ModuleSelectedPopup
      //   previousCompletions={this.state.previousCompletions}
      //   handleClose={this.handleDialogClose}
      //   handleRestore={undefined}
      //   handleNewContent={this.getContent}
      // />
    );
  }
}

export default ModuleSelection;
