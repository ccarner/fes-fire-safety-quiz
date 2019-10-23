import React from "react";
import StandardButton from "./standardButton.jsx";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    backgroundColor: "green",
    border: "5px",
    color: "white"
  }
});

function SubmitButton(props) {
  return <StandardButton {...props} />;
}

export default withStyles(styles)(SubmitButton);
