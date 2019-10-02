import React, { Fragment } from 'react';
import Question from './Question';
import FESLogo from './FESlogo.jpg';
import ModuleStart from './popup_startModule';


// import CheckSelectionFormat from './checklist_selection_format';

function ChecklistMain(props) {


    function renderAnswerOptions() {
        return (
            <Fragment>

            </Fragment>
        );
    }


    return (

        <div key={props.questionId} className="quiz-story">

            <div className="media"><img alt="infModulePicture"
                src={FESLogo} style={{ width: 200, height: 100, position: 'relative', top: 0, left: 50 }} />

            </div>


            <Question content={props.question} />


            <div>
                <ul className="answerOptions">
                    {renderAnswerOptions()}
                </ul>
            </div>



            <div className="bottom-footer" >
                <ModuleStart></ModuleStart>
            </div>
        </div>
    );
}


export default ChecklistMain;
