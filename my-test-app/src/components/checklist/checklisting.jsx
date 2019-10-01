// commented.


// import relevent modules
import React, { Component, Fragment } from "react";
import CheckListAPI from "./checklist_questions";
import Check_Format from "./check_list_format";
import Summary from "./Summary";

import OneChecklist from './eachChecklist';

import CheckSelectionFormat from './checklist_selection_format';

import PropTypes from 'prop-types';


// Main class starts here
class Checklisting extends Component {

  // setting up the initial states, noting the summary mode is off initially
  constructor(props) {
    super(props);
    this.state = {
      checklistBank: [],

      summaryOn: false,
      isSafe: false,
      safety: 1

    };
    this.handleAnswerFeedback = this.handleAnswerFeedback.bind(this);

  }


  // ChecklistAPI() automatically formatted the checklists, so this function set the cheklistBank
  // to the checklists we have in the database
  getQuestions = () => {

    CheckListAPI().then((question) => {
      console.log("checklisting 22", question);
      this.setState({
        checklistBank: question
      });
    });
  };

  handleAnswerFeedback(e, selectionValue) {
    console.log(selectionValue);
  }


  // If the user choose to see the feedback, summary mode is turned on
  renderSummary() {
    this.setState(
      {
        summaryOn: true
      }
    );
  }

  componentDidMount() {
    this.getQuestions();
  }


  increseSafety = () => {
    this.setState(
      {
        safety: this.state.safety + 1,
        isSafe: this.state.safety >= this.state.checklistBank.length
      }

    );



    // console.log("reach increse", this.state.safety, this.state.checklistBank.length, this.state.safety >= this.state.checklistBank.length);

  }



  decreseSafety = () => {

    this.setState(
      {
        safety: this.state.safety - 1,
        isSafe: this.state.safety >= this.state.checklistBank.length
      }
    );

    // console.log("reach decrese", this.state.safety);

  }



  // This function renders the checklist page, each checklist question is listed with three options to choose from
  // and there is a button to view the result.
  render() {
    if (this.state.summaryOn === false) {
      return (
        <Fragment>
          <div className="Checklisting">
            {this.state.checklistBank.map(
              (singleCh) => {
                return (
                  <OneChecklist key={singleCh.questionID} current={singleCh}
                    increseSafety={this.increseSafety} decreseSafety={this.decreseSafety} />

                  // <Check_Format questionID={singleCh.questionID} question={singleCh.question}
                  //  media={singleCh.media} media_src={singleCh.media_src} answerFeedback={this.handleAnswerFeedback} />

                );
              }
            )}
          </div>

          <div>
            <button type="button" className="summary-btn" onClick={() => this.renderSummary()}>See Feedback</button>
          </div>


        </Fragment>
      );
    } else {




      return (

        < Summary isSafe={this.state.isSafe} />

      );
    }
  }
}

// PropTypes to complete the structure
Checklisting.propTypes = {

  checklistBank: PropTypes.array.isRequired

}


export default Checklisting;
