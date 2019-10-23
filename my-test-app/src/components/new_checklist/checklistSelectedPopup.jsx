import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CompletedChecklistDescription from "./completedChecklistDescription.jsx";
import Button from "@material-ui/core/Button";

class ChecklistSelectedPopup extends Component {
  constructor(props) {
    super(props);
  }

  titleToDisplay(option) {
    let title;
    try {
      title = option.metadata.title;
    } catch (err) {
      title = option.filename;
    }
    return title;
  }

  renderPreviousSelections() {
    if (this.props.previousCompletions.length !== 0) {
      return (
        <React.Fragment>
          Previous Completions:
          {this.props.previousCompletions.map(completion => {
            return (
              <CompletedChecklistDescription
                time={completion.completionTime}
                comment={completion.comment}
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
          {this.props.fileObject.metadata &&
            this.props.fileObject.metadata.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.fileObject.metadata &&
              this.props.fileObject.metadata.description}
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

export default ChecklistSelectedPopup;
