import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import Button from "@material-ui/core/Button";
import ButtonBases from "./ButtonBases";
import background1 from "./pictures/textbooks.jpg";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/Man-filling-up-checklist.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function doLink(thing) {
  return (window.location = thing);
}
function SafetyPage(props) {
  const classes = useStyles();
  const [mainMenu, setMenu] = useState([
    {
      name: "Information Modules",
      link: "/infoModule",
      url: background1
    },
    {
      name: "Building Safety Checklist",
      link: "/buildingCheck",
      url: background3
    }
  ]);

  return (
    <React.Fragment>
      <h1>Safety</h1>
      {mainMenu.map(option =>
        ButtonBases(option.name, option.link, option.url, doLink, classes)
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
export default SafetyPage;
