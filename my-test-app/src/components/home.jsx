import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import Button from "@material-ui/core/Button";
import ButtonBases from './ButtonBases';
import background1 from "./pictures/questionmarks.png";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/building.jpg";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import background5 from "./pictures/textbooks.jpg";
import background4 from "./pictures/Man-filling-up-checklist.jpg";
import useStyles from './menustyle'



function doLink(thing) {
  return window.location = thing;
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
      name: "Quizzes",
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
    },

  ]);
  //const classes = useStyles();
  function FormRow(option) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <IconButton color='primary'><HelpOutlineIcon fontSize="large" enableBackground="true"/></IconButton>

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
      <div className={classes.root}>
      <Grid container spacing={1} alignItems="center">
        <Grid container item xs={12} spacing={3}alignItems="center" justify="center">
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
      {mainMenu.map(option =>
        ButtonBases(option.name, option.link, option.url, doLink, classes)
      )}
      {/* <button onClick={function() { doLink('./thing'); }} >asdf</button> */}
    </React.Fragment>
  );
}

export default HomePage;
