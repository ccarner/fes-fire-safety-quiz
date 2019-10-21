import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    margin: 8,
    padding: 8
  }
});

function StandardPaper(props) {
  return <Paper {...props} />;
}

export default withStyles(styles)(StandardPaper);
