import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import FormLabel from "@material-ui/core/FormLabel";
import StandardButton from "./uiComponents/standardButton.jsx";
import SubmitButton from "./uiComponents/submitButton.jsx";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import Button from "@material-ui/core/Button";

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
import GridList from "@material-ui/core/GridList";
import { red } from "@material-ui/core/colors";
import GridListTile from "@material-ui/core/GridListTile";

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

  function oneIconGrid(icon, text, link, buttonId) {
    return (
      <GridListTile>
        <Link to={link}>
          <Button
            variant="contained"
            color="primary"
            id={buttonId}
            size="large"
            style={{ borderRadius: 100, width: 130, height: 130, padding: 8 }}
            className={classes.backgroundButtonStyle}
          >
            {icon}
          </Button>
        </Link>
        <Typography style={{ padding: 8 }}>{text}</Typography>
      </GridListTile>
    );
  }

  return (
    <GridList
      cellHeight={200}
      className={classes.gridList}
      style={{ paddingTop: 20, width: "100%" }}
    >
      {oneIconGrid(
        <DescriptionIcon
          enableBackground="true"
          className={classes.iconstyle}
        />,
        "Learn about Fire Safety",
        "/modules",
        "button-modules"
      )}
      {oneIconGrid(
        <AssignmentTurnedInIcon
          fontSize="large"
          enableBackground="true"
          className={classes.iconstyle}
        />,
        "Test Your Knowledge",
        "/quizzes",
        "button-quizzes"
      )}
      {oneIconGrid(
        <AssignmentIcon
          fontSize="large"
          enableBackground="true"
          className={classes.iconstyle}
        />,
        "Complete a Fire Safety Checklist",
        "/checklists",
        "button-checklists"
      )}
      {oneIconGrid(
        <InfoIcon
          fontSize="large"
          enableBackground="true"
          className={classes.iconstyle}
        />,
        "Who Are FES?",
        "/information",
        "button-information"
      )}
      {oneIconGrid(
        <HelpOutlineIcon
          fontSize="large"
          enableBackground="true"
          className={classes.iconstyle}
        />,
        "Learn How To Use This App",
        "/help",
        "button-help"
      )}
    </GridList>
  );
}

export default HomePage;
