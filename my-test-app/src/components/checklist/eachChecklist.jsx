import React, { Component, Fragment } from 'react';
import CheckSelectionFormat from './checklist_selection_format';
import PropTypes from 'prop-types';
import './checklistStyle.css';
import { Divider } from '@material-ui/core';

// This class is for the format of every single checklist question
export class eachChecklist extends Component {

    // setting up the initial states
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            redAlert: false
        };
    }

    //If the user selects option1("Yes"), the safety score increase by 1
    // On the other hand, if the user de-selects option1("Yes"), the safety score decreaseby 1
    // Noting safety score can be adjustable to each question, and
    // if the safety score is larger or equal to the total number of questions, the building is classfied as safe
    handleSelection = (selected) => {
        if (selected === 'option1') {
            this.props.increseSafety();
            this.setState(
                {
                    isChecked: true,
                    redAlert: false
                }
            );
        } else {
            if (this.state.isChecked) {
                this.props.decreseSafety();
            }
            this.setState(
                {
                    isChecked: false,
                    redAlert: true
                }
            );
        }
    }


    // If a checklist question is completed, this question is crossed out,
    // If the user fails to meet the expection of one question, this question is highlighed by red color
    getStyle1 = () => {
        if (this.state.isChecked) {
            return { textDecoration: 'line-through' }
        } else if (this.state.redAlert) {
            return { color: 'red' }
        } else {
            return {};
        }
    }

    render() {
        return (
            <Fragment>
                <div key={this.props.current.questionId} className="checklist_keyID"></div>

                <div className="ChecklistMedia">
                    {this.props.current.media === "text" ? <br /> : (this.props.current.media === "img"
                        ? <div className="media"><img src={this.props.current.media_src}
                            alt="checklist_picture" className="checkImage" /></div> :
                        <div><video src={this.props.current.media_src} type="video/mp4" controls /></div>)}
                </div>


                <div style={this.getStyle1()}>
                    <h2 className="checklistQuestion">{this.props.current.question}</h2>
                </div>


                <div>
                    {< CheckSelectionFormat answerFeedback={this.handleSelection} />}
                </div>


                <div className="bottom-footer" >
                    <Divider />
                </div>

            </Fragment>
        )
    }
}


// PropTypes to ensure this class has the right props
eachChecklist.propTypes = {
    current: PropTypes.object.isRequired
}
export default eachChecklist;