import React, { Component, Fragment, useState, useEffect } from "react";
import infoModuleAPI from "./module_questions";
import InfoModuleFormat from "./infoModule_format";


// import ReactDOM from "react-dom";
// import "./checkComponent.css";


function App(props) {
    const [moduleBank, setBank] = useState([]);
    const [questiontotal, setTotal] = useState(infoModuleAPI.length);
    const [summaryOn, setSummary] = useState(false);
    

    const getQuestions = () => {
        infoModuleAPI().then(question => {
            setBank(
                question
            );
        });
    };


    function renderSummary() {
        setSummary(
            {
                summaryOn: true
            }
        );
    }
    useEffect(() => {getQuestions()},[])



        return (
            <Fragment>
                <div className="App">
                    {moduleBank.map(
                        ({ question }) => (
                            <InfoModuleFormat question={question} />
                        )
                    )}
                </div>

            </Fragment>
        );

    
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
