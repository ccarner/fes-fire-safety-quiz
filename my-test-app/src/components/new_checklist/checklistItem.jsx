import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

class ChecklistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.props.handleSelection(this.props.questionNum, event.target.value);
  }

  render() {
    return (
      <Paper style={{ padding: 8, margin: 8 }}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Grid item xs={12}>
            <Typography component="p">
              {this.props.question.question}
            </Typography>
          </Grid>

          <Grid item xs={9}>
            <FormControl component="fieldset" disabled={this.props.submitted}>
              <RadioGroup
                name="position"
                onChange={this.handleSelection}
                value={this.props.selection || "unsure"}
                row
              >
                {this.props.selectionOptions.map((option, index) => {
                  return (
                    <FormControlLabel
                      value={option}
                      control={<Radio color="primary" />}
                      label={option}
                      labelPlacement="bottom"
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={1}>
            <IconButton
              color="primary"
              onClick={() => this.props.handleInfoPopup(this.props.questionNum)}
            >
              <HelpOutlineIcon fontSize="large" enableBackground="true" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default ChecklistItem;
