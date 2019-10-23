import React, { Component } from "react";
import StandardPaper from "../uiComponents/standardPaper.jsx";

class CompletedChecklistDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComment() {
    if (this.props.comment) {
      return (
        <React.Fragment>
          <br />
          Comment:{this.props.comment}
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div onClick={this.props.handleView}>
        <StandardPaper>
          Time: {this.props.time}
          {this.renderComment()}
        </StandardPaper>
      </div>
    );
  }
}

export default CompletedChecklistDescription;
