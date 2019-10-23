import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    margin: 8,
    padding: 8,
    textTransform: "none",
    fontWeight: 500
  }
});

function StandardButton(props) {
  return <Button variant="contained" color="default" {...props} />;
}

export default withStyles(styles)(StandardButton);
