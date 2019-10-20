import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class CompletedChecklistDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div onClick={this.props.handleViewChecklist}>
        <Paper style={{ padding: 8, margin: 8 }}>
          {this.props.name}
          {this.props.time}
          {this.props.comment}
        </Paper>
      </div>
    );
  }
}

export default CompletedChecklistDescription;
