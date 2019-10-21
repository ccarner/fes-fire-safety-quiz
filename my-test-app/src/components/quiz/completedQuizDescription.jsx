import React, { Component } from "react";
import StandardPaper from "../uiComponents/standardPaper.jsx";

class CompletedQuizDescription extends Component {
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
        </StandardPaper>
      </div>
    );
  }
}

export default CompletedQuizDescription;
