// commented.

import React, { Fragment } from 'react';
import Question from './Question';
import CheckSelectionFormat from './checklist_selection_format';
import './checklistStyle.css';


// This function returns one formatted checklist question.
function ChecklistMain(props) {


    function renderAnswerOptions() {
        return (
            <Fragment>
                {< CheckSelectionFormat />}
            </Fragment>
        );
    }


    return (

        <Fragment>
            <div key={props.questionId} className="checklist_format">

                {/* This division displays the media of the checklist question */}
                <div className="Media">
                    {props.media === "text" ? <br /> : (props.media === "img" ? <div className="media"><img
                        src={props.media_src} alt="checklist_picture" className="checkImage" /></div> :
                        <div><video src={props.media_src} type="video/mp4" controls /></div>)}
                </div>

                <div>
                    {<Question content={props.question} />}
                </div>

                <div>
                    <ul className="checklistAnswerOptions">
                        {renderAnswerOptions()}
                    </ul>
                </div>

                <div className="bottom-footer" >

                </div>
            </div>
        </Fragment>
    );
}


export default ChecklistMain;
