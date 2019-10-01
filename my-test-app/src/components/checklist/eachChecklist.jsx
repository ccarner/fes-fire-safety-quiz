import React, { Component, Fragment } from 'react';
import CheckSelectionFormat from './checklist_selection_format';
import PropTypes from 'prop-types';
import './checklistStyle.css';
import { Divider } from '@material-ui/core';

export class eachChecklist extends Component {

    // setting up the initial states
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            redAlert: false
        };


    }

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


// PropTypes to complete the structure
eachChecklist.propTypes = {
    current: PropTypes.object.isRequired
}
export default eachChecklist;