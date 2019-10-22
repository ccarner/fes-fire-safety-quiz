import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IndexedDataBase from "../../dataStorage.js";
import CompletedChecklistDescription from "./completedChecklistDescription.jsx";
import Button from "@material-ui/core/Button";

class ChecklistSelectedPopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        //this checks if the menu option has been selected, and if it is then open the corresponding dialog box
        open={true}
        onClose={this.props.handleClose}
      >
        <DialogTitle id="MenuDialog">{"Checklist"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{"test for now"}</DialogContentText>
          {console.log("prevcompletion", this.props.previousCompletions)}
          {this.props.previousCompletions &&
            this.props.previousCompletions.map(completion => {
              return (
                <CompletedChecklistDescription
                  name={"add 'name' to checklists..."}
                  time={completion.completionTime}
                  comment={completion.comment}
                  handleView={() => {
                    this.props.handleRestore(completion);
                  }}
                />
              );
            })}
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
