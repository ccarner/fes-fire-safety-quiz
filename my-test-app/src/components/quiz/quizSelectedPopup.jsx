import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CompletedQuizDescription from "./completedQuizDescription.jsx";
import Button from "@material-ui/core/Button";

class QuizSelectedPopup extends Component {
  constructor(props) {
    super(props);
  }

  renderPreviousSelections() {
    if (this.props.previousCompletions.length !== 0) {
      return (
        <React.Fragment>
          Previous Completions:
          {this.props.previousCompletions.map(completion => {
            return (
              <CompletedQuizDescription
                time={completion.completionTime}
                handleView={() => {
                  this.props.handleRestore(completion);
                }}
              />
            );
          })}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <Dialog
        //this checks if the menu option has been selected, and if it is then open the corresponding dialog box
        open={true}
        onClose={this.props.handleClose}
      >
        <DialogTitle id="MenuDialog">
          {this.props.fileObject.metadata.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.fileObject.metadata.description}
          </DialogContentText>
          {this.renderPreviousSelections()}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.props.handleClose}
            variant="contained"
            color="primary"
            text_transform="none"
          >
            Close
          </Button>
          <Button
            //when the button is clicked execute the callback function
            onClick={() => {
              this.props.handleNewContent();
            }}
            variant="contained"
            color="primary"
            text_transform="none"
          >
            Start Module
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default QuizSelectedPopup;
