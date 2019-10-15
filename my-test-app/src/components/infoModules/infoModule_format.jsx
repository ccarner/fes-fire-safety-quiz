import React, { Component, Fragment, useState, useEffect } from "react";
import Question from "./Question";
import FESLogo from "./FESlogo.jpg";
import ModuleStart from "./popup_startModule";
import ButtonBases from "../newMenu";
import useStyles from "../menustyle";

// import CheckSelectionFormat from './checklist_selection_format';

function ChecklistMain(props) {
<<<<<<< HEAD
  const classes = useStyles();

  const [selected, setselected] = useState(null);

  function handleClickOpen(name) {
    setselected(name);
  }
  function handleClose() {
    setselected(null);
  }

  function myFunction() {
    //alert("you just clicked start");
    //window.location.href= '/intro_to_fire_safety.html' ;
    window.location.href = "/informationModule";
    //document.getElementById('body').innerHTML =
    //              loadPage('intro_to_fire_safety.html');
  }

  function renderAnswerOptions() {
    return <Fragment></Fragment>;
  }

  return ButtonBases(
    props.question,
    props.question,
    "",
    myFunction,
    classes,
    "",
    handleClickOpen,
    handleClose,
    selected
  );

  // <div key={props.questionId} className="quiz-story">

  //     <div className="media"><img alt="infModulePicture"
  //         src={FESLogo} style={{ width: 200, height: 100, position: 'relative', top: 0, left: 50 }} />

  //     </div>

  //     <Question content={props.question} />

  //     <div>
  //         <ul className="answerOptions">
  //             {renderAnswerOptions()}
  //         </ul>
  //     </div>

  //     <div className="bottom-footer" >
  //         <ModuleStart></ModuleStart>
  //     </div>
  // </div>
=======
    const classes = useStyles();

    const [selected, setselected] = useState(null);


    function handleClickOpen(name) {
        setselected(name)
    }
    function handleClose() {
        setselected(null);
    }

    function myFunction() {
        //alert("you just clicked start");
        //window.location.href= '/intro_to_fire_safety.html' ;
        window.location.href = '/informationModule';
        //document.getElementById('body').innerHTML = 
        //              loadPage('intro_to_fire_safety.html');
    }


    function renderAnswerOptions() {
        return (
            <Fragment>

            </Fragment>
        );
    }


    return (
        ButtonBases(props.question, props.question, "", myFunction, classes, "", handleClickOpen, handleClose, selected)


        // <div key={props.questionId} className="quiz-story">

        //     <div className="media"><img alt="infModulePicture"
        //         src={FESLogo} style={{ width: 200, height: 100, position: 'relative', top: 0, left: 50 }} />

        //     </div>


        //     <Question content={props.question} />


        //     <div>
        //         <ul className="answerOptions">
        //             {renderAnswerOptions()}
        //         </ul>
        //     </div>



        //     <div className="bottom-footer" >
        //         <ModuleStart></ModuleStart>
        //     </div>
        // </div>
    );
>>>>>>> dde4707111419dd2d609201bfb7f1911c7cd6079
}

export default ChecklistMain;
