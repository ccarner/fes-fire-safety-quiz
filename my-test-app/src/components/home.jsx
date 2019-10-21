import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import FormLabel from "@material-ui/core/FormLabel";

import Button from "@material-ui/core/Button";
import ButtonBases from "./ButtonBases";
import background1 from "./pictures/questionmarks.png";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/building.jpg";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import InfoIcon from "@material-ui/icons/Info";
import background5 from "./pictures/textbooks.jpg";
import background4 from "./pictures/Man-filling-up-checklist.jpg";
import useStyles from "./menustyle";
import { red } from "@material-ui/core/colors";

function doLink(thing) {
  return (window.location = thing);
  //return <Redirect to={`${thing}`} />
}

function HomePage(props) {
  const classes = useStyles();
  //the static homepage menu options
  const [mainMenu, setMenu] = useState([
    {
      name: "Information Modules",
      link: "./infoModule",
      url: background5
    },
    {
      name: "Building Safety Checklist",
      link: "./buildingCheck",
      url: background4
    },
    {
      name: "Test Your Knowledge",
      link: "./quizzes",
      url: background1
    },
    {
      name: "About FES",
      link: "./information",
      url: background2
    },
    {
      name: "HELP",
      link: "./helppage",
      url: ""
    }
  ]);
  //const classes = useStyles();
  function FormRow(option) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <IconButton classes={classes.iconstyle} size="large" color="primary">
            <DescriptionIcon fontSize="large" enableBackground="true" />
          </IconButton>

          {/* <Paper className={classes.paper}>item</Paper> */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h1>Home</h1>
      <div className={classes.root} height="100%">
        <Grid container spacing={0} alignItems="center" height="100%">
          <Grid
            container
            item
            xs={12}
            spacing={3}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={4} height="100">
              <IconButton
                size="medium"
                className={classes.iconstyle}
                component={Link}
                to="/modules"
                color="secondary"
                enableBackground
              >
                <DescriptionIcon fontSize="large" enableBackground="true" />
              </IconButton>
              <div></div>
              <FormLabel>Information Modules</FormLabel>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                color="primary"
                className={classes.iconstyle}
                component={Link}
                to="/checklists"
              >
                <AssignmentIcon fontSize="large" enableBackground="true" />
              </IconButton>
              <div></div>
              <FormLabel>Building Safety Checklists</FormLabel>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={3}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={4}>
              <IconButton
                color="primary"
                className={classes.iconstyle}
                component={Link}
                to="/quizzes"
              >
                <AssignmentTurnedInIcon
                  fontSize="large"
                  enableBackground="true"
                />
              </IconButton>
              <div></div>
              <FormLabel>Test Your Knowledge</FormLabel>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                color="primary"
                className={classes.iconstyle}
                component={Link}
                to="/information"
              >
                <InfoIcon fontSize="large" enableBackground="true" />
              </IconButton>
              <div></div>
              <FormLabel>About FES</FormLabel>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={3}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={4}>
              <IconButton
                color="primary"
                className={classes.iconstyle}
                component={Link}
                to="/helppage"
              >
                <HelpOutlineIcon fontSize="large" enableBackground="true" />
              </IconButton>
              <div></div>
              <FormLabel>How to Use</FormLabel>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* {mainMenu.map(option =>
        ButtonBases(option.name, option.link, option.url, doLink, classes)
      )} */}
      {/* <button onClick={function() { doLink('./thing'); }} >asdf</button> */}
    </React.Fragment>
  );
}

export default HomePage;
