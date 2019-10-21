import React, { Component } from "react";
import StandardPaper from "../uiComponents/standardPaper.jsx";

class CompletedChecklistDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div onClick={this.props.handleView}>
        <StandardPaper>
          {this.props.name}
          {this.props.time}
          {this.props.comment}
        </StandardPaper>
      </div>
    );
  }
}

export default CompletedChecklistDescription;
