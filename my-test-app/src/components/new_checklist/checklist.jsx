import React, { Component } from "react";
import ChecklistSection from "./checklistSection";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubmitButton from "../uiComponents/submitButton.jsx";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.selectionOptions = ["Yes", "No", "Unsure"];
    //set up the selections to have an empty array per section:
    this.state = {
      infoSelected: undefined,
      selections: [],
      submissionComment: ""
    };

    if (this.props.submitted) {
      this.state.submissionComment = this.props.comment;
      this.state.selections = this.props.selections;
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleOpenInfoPopup = this.handleOpenInfoPopup.bind(this);
    this.handleCloseInfoPopup = this.handleCloseInfoPopup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMediaInfo = this.renderMediaInfo.bind(this);
    this.renderSubmissionComponents = this.renderSubmissionComponents.bind(
      this
    );
    this.handleSubmissionCommentUpdate = this.handleSubmissionCommentUpdate.bind(
      this
    );
  }

  handleSelection(sectionNum, questionNum, value) {
    this.setState(prevState => {
      console.log("prevstate", prevState);
      var selections = [...prevState.selections];
      console.log("selectionsNew", selections);
      //doesn't matter if sharing same pointers to sections, since not changing them...
      if (selections[sectionNum] === undefined) {
        selections[sectionNum] = [];
        console.log("undefined...", selections);
      }
      selections[sectionNum][questionNum] = value;
      console.log("before submitting", selections);
      // note have to return this selecitons object, else will EXPAND into separate components from the array to a new
      //state var each!!
      return { selections: selections };
    });
    console.log(
      "handleSelection",
      this.state.selections,
      questionNum,
      sectionNum,
      value
    );
  }

  handleOpenInfoPopup(sectionNum, questionNum) {
    this.setState({
      infoSelected: {
        sectionNum: sectionNum,
        questionNum: questionNum
      }
    });
  }

  handleCloseInfoPopup() {
    this.setState({
      infoSelected: undefined
    });
  }

  async handleSubmit() {
    await this.props.handleSubmit(
      this.state.selections,
      this.state.submissionComment
    );
  }

  handleSubmissionCommentUpdate(event) {
    this.setState({ submissionComment: event.target.value });
  }

  renderSubmissionComponents() {
    if (!this.props.submitted) {
      return (
        <React.Fragment>
          <label>Notes on this checklist for later reference:</label>
          <input
            class="form-control"
            type="text"
            field="question"
            // Added the || "" in the 'value' attribute to prevent component becoming uncontrolled when question is initially null:
            // Qas getting error  A component is changing an uncontrolled input of type text to be controlled
            value={this.state.submissionComment || ""}
            onChange={this.handleSubmissionCommentUpdate}
          />
          <SubmitButton onClick={this.handleSubmit} color="primary">
            Submit
          </SubmitButton>
        </React.Fragment>
      );
    }
  }

  renderMediaInfo() {
    var q = this.props.checklistFile.checklist_questions[
      this.state.infoSelected.sectionNum
    ].questions[this.state.infoSelected.questionNum];
    if (q.media === "img") {
      return (
        <img
          style={{ width: 250, height: 200 }}
          src={q.media_src}
          alt="Help Dialog"
        />
      );
    } else if (q.media === "video") {
      return (
        <video
          width="270"
          height="200"
          src={q.media_src}
          type="video/mp4"
          controls="true"
        ></video>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* added in the extra check at the start (in addition to the required 'open' status) 
        because the closing was jittery otherwise (ie it would clearly render away the dialog box
        and then AFTERwards render away the media content...*/}
        {this.state.infoSelected && (
          <Dialog
            onClose={this.handleCloseInfoPopup}
            open={this.state.infoSelected !== undefined}
          >
            <DialogTitle>{"Information"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {this.state.infoSelected &&
                  this.props.checklistFile.checklist_questions[
                    this.state.infoSelected.sectionNum
                  ].questions[this.state.infoSelected.questionNum].help_text}
              </DialogContentText>
              {this.state.infoSelected && this.renderMediaInfo()}
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                onClick={this.handleCloseInfoPopup}
                autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {console.log("inside of checklist", this.state, this.props)}
        {this.props.checklistFile.checklist_questions.map((section, index) => {
          return (
            <ChecklistSection
              sectionNum={index}
              section={section}
              selectionOptions={this.selectionOptions}
              handleSelection={this.handleSelection}
              handleInfoPopup={this.handleOpenInfoPopup}
              submitted={this.props.submitted}
              selections={this.state.selections[index]}
            />
          );
        })}
        {this.renderSubmissionComponents()}
      </React.Fragment>
    );
  }
}

export default Checklist;
