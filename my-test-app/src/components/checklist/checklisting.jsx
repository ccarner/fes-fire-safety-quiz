// commented.

// import relevent modules
import React, { Component, Fragment } from "react";
import Summary from "./Summary";
import OneChecklist from "./eachChecklist";
import PropTypes from "prop-types";
// import useStyles from '../menustyle'
import Button from "@material-ui/core/Button";

// const classes = useStyles();

// Main class starts here
class Checklisting extends Component {
  // setting up the initial states, noting the summary mode is off initially
  constructor(props) {
    super(props);
    //alert(props.questions)
    this.state = {
      checklistBank: this.props.questions,
      summaryOn: false,
      isSafe: false,
      safety: 1
    };
  }

  // If the user choose to see the feedback, summary mode is turned on
  renderSummary() {
    this.setState({
      summaryOn: true
    });
  }

  // Add all checklist materials to checklistBank
  componentDidMount() {
    //this.getQuestions();
  }

  // If the user completes one checklist succssfully, the safety score increase by 1
  increseSafety = () => {
    this.setState({
      safety: this.state.safety + 1,
      isSafe: this.state.safety >= this.state.checklistBank.length
    });
  };

  // If the user changes the option from checked to unchecked, the safety score decrease by 1
  decreseSafety = () => {
    this.setState({
      safety: this.state.safety - 1,
      isSafe: this.state.safety >= this.state.checklistBank.length
    });
  };

  // This function renders the checklist page, each checklist question is listed with three options to choose from
  // and there is a button to view the result at the end.
  // If the user clicks on the summary butoon, feedback summary will be displayed, and the user can tell
  // whether the building is safe from the result.
  render() {
    //alert(JSON.stringify(this.props.questions))
    if (this.props.questions !== undefined && this.state.rendered === false) {
      //this.quiz_questions = QuizAPI;
      //this.checklistBank = this.props.questions //require(""+this.props.jsonURL);
      //alert(JSON.stringify(this.props.questions))
      this.setState({
        checklistBank: this.props.questions
      });
    }
    if (this.state.summaryOn === false) {
      return (
        <Fragment>
          <div className="Checklisting">
            {this.state.checklistBank.map(singleCh => {
              return (
                <OneChecklist
                  key={singleCh.questionID}
                  current={singleCh}
                  increseSafety={this.increseSafety}
                  decreseSafety={this.decreseSafety}
                />
              );
            })}
          </div>

          <div>
            <Button
              onClick={() => this.renderSummary()}
              variant="contained"
              color="primary"
              text_transform="none"
              classes={{
                //label: classes.label,
                textTransform: "none"
              }}
            >
              See Feedback
            </Button>
            {/* <button type="button" className="summary-btn" onClick={() => this.renderSummary()}>See Feedback</button> */}
          </div>
        </Fragment>
      );
    } else {
      return <Summary isSafe={this.state.isSafe} />;
    }
  }
}

// PropTypes to complete the structure
Checklisting.propTypes = {
  checklistBank: PropTypes.array.isRequired
};

export default Checklisting;
