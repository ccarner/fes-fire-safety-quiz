import React, { Component, useState, useEffect } from "react";
import { Link, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import Button from "@material-ui/core/Button";
import ButtonBases from './ButtonBases';
import background1 from "./pictures/questionmarks.png";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/building.jpg";


function doLink(thing){
  return window.location = thing;
 //return <Redirect to={`${thing}`} />
}
function HomePage(props) {
  const [mainMenu, setMenu] = useState([
    { name: "Fire Safety Information", link: "/safetyHome", url: background3 },
    { name: "Quizzes", link: "/quizzes", url: background1 },
    { name: "About FES", link: "/information", url: background2 }
  ]);
  const [imageURL, setURL] = useState("");
  //const classes = useStyles();

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
        ButtonBases(option.name, option.link, option.url, doLink)
      )}
      <button onClick={function() { doLink('./thing'); }} >asdf</button>
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
