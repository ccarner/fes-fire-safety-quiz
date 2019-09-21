import React, { Fragment } from 'react';
import Question from './Question';


import CheckSelectionFormat from './checklist_selection_format';

function ChecklistMain(props) {


    function renderAnswerOptions() {
        return (
            <Fragment>
                < CheckSelectionFormat />
            </Fragment>
        );
    }


    return (

        <div key={props.questionId} className="quiz-story">
            <div className="Media">
                {props.media === "text" ? <br /> : (props.media === "img" ? <div className="media"><img
                    src={props.media_src} alt="picture" width="200" height="200" className="quizImage" /></div> :
                    <div><video src={props.media_src} type="video/mp4" controls /></div>)}
            </div>

            <Question content={props.question} />


            <div>
                <ul className="answerOptions">
                    {renderAnswerOptions()}
                </ul>
            </div>



            <div className="bottom-footer" >


                {/* {props.counter < props.questionTotal - 1 ? (<button className="next-btn" onClick={props.setNextQuestion} >Next</button>) : (<div></div>)} */}
                {props.counter < props.questionTotal - 1 ? (<button className="next-btn" onClick={props.setNextQuestion} >Next</button>)
                    : (<div></div>)}

            </div>
        </div>
    );
}


export default ChecklistMain;
