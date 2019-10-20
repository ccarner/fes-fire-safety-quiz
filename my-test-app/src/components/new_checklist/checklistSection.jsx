import React, { Component } from "react";
import ChecklistItem from "./checklistItem";
import AppBar from "@material-ui/core/AppBar";

class ChecklistSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(questionNum, value) {
    this.props.handleSelection(this.props.sectionNum, questionNum, value);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <AppBar
            position="static"
            style={{ position: "sticky", top: 65, backgroundColor: "grey" }}
          >
            {this.props.section.section_name}
          </AppBar>

          {this.props.section.questions.map((question, index) => {
            return (
              <ChecklistItem
                question={question}
                questionNum={index}
                submitted={this.props.submitted}
                selectionOptions={this.props.selectionOptions}
                handleSelection={this.handleSelection}
                selection={
                  this.props.selections && this.props.selections[index]
                }
                handleInfoPopup={questionNum =>
                  this.props.handleInfoPopup(this.props.sectionNum, questionNum)
                }
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default ChecklistSection;
