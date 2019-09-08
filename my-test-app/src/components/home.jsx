import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import Button from "@material-ui/core/Button";
//import ButtonBases from './ButtonBases';
import background1 from "./pictures/questionmarks.png";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/building.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

function ButtonBases(name, link, url) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={name}
        component={Link}
        to={`${link}`}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%"
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
            np
          >
            {name}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}

function HomePage(props) {
  const [mainMenu, setMenu] = useState([
    { name: "Fire Safety Information", link: "/safetyHome", url: background3 },
    { name: "Quizzes", link: "/quizzes", url: background1 },
    { name: "About FES", link: "/information", url: background2 }
  ]);
  const [imageURL, setURL] = useState("");
  const classes = useStyles();

  //  function useEffect() {
  // NOTE had to use arrow function to ensure that 'this' binding was still to
  // the outer class...
  useEffect(() => {
    ImageDatabase.getImage("https://picsum.photos/200").then(imageString => {
      setURL(imageString);
    });
  }, []);

  return (
    <React.Fragment>
      <img alt="" src={`data:image/jpeg;base64,${imageURL}`} />
      <h1>Home</h1>
      {mainMenu.map(option =>
        ButtonBases(option.name, option.link, option.url)
      )}
    </React.Fragment>
  );
}
function renderMenuOption(name, link) {
  return (
    <div>
      <Link to={`${link}`}>{name}</Link>
    </div>
  );
}
export default HomePage;
