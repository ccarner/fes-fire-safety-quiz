import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class CompletedQuizDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div onClick={this.props.handleView}>
        <Paper style={{ padding: 8, margin: 8 }}>
          {this.props.name}
          {this.props.time}
        </Paper>
      </div>
    );
  }
}

export default CompletedQuizDescription;
