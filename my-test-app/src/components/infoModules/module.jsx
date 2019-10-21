import React, { Component } from "react";
import ReactDOM from "react-dom";
import StandardPaper from "../uiComponents/standardPaper.jsx";
import Typography from "@material-ui/core/Typography";

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlstring: this.props.htmlstring
    };
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup(htmlstring) {
    return { __html: htmlstring };
  }

  render() {
    return (
      <React.Fragment>
        <StandardPaper>
          <Typography>
            <div
              dangerouslySetInnerHTML={this.createMarkup(this.state.htmlstring)}
            />
          </Typography>
        </StandardPaper>
      </React.Fragment>
    );
  }
}

export default Module;
