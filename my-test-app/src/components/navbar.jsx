//import React from "react";
import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { HashLink } from "react-router-hash-link";
import FES_LOGO from "./pictures/logo.png";
import useStyles from "./menustyle";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// a stateless functional component in react... since only from props etc
// pass props as arg and don't use 'this'

const NavBar = props => {
  const [page, setpage] = useState(null);
  const classes = useStyles();

  function getTitletoDisplay() {
    let location = props.location.pathname.toLowerCase();
    if (location === "/") {
      return "Home";
    } else if (location.includes("quiz")) {
      return "Quiz";
    } else if (location.includes("checklist")) {
      return "Checklist";
    } else if (location.includes("module")) {
      return "Learn";
    } else if (location.includes("about")) {
      return "About FES";
    } else if (location.includes("help")) {
      return "Help";
    } else {
      return "";
    }
  }

  useEffect(() => {
    setpage(
      window.location.href.toString().split(window.location.host + "/app/")[1]
    );
  });
  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{
          position: "fixed",
          backgroundColor: "#383838",
          padding: 1,
          height: 50
        }}
      >
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Button
              //className={classes.button}
              className={classes.navbarStyle}
              aria-label="delete"
              component={Link}
              to="/"
            >
              <HomeIcon
                id = "button-home"
                fontSize="large"
                //color='secondary'
              />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5"> {getTitletoDisplay()}</Typography>
          </Grid>
          <Grid item xs={3}>
            <img alt="" width="60" src={FES_LOGO} />
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
