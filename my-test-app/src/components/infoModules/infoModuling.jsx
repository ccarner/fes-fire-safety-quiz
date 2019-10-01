import React, { Component, Fragment } from "react";
import infoModuleAPI from "./module_questions";
import InfoModuleFormat from "./infoModule_format";


// import ReactDOM from "react-dom";
// import "./checkComponent.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleBank: [],
            questionTotal: infoModuleAPI.length,
            summaryOn: false
        };
    }

    getQuestions = () => {
        infoModuleAPI().then(question => {
            this.setState({
                moduleBank: question
            });
        });
    };


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

    render() {

        return (
            <Fragment>
                <div className="App">
                    {this.state.moduleBank.map(
                        ({ question }) => (
                            <InfoModuleFormat question={question} />
                        )
                    )}
                </div>

            </Fragment>
        );

    }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
