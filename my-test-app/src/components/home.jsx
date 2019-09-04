import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ImageDatabase from "../db.js";
import Button from '@material-ui/core/Button'; 
import ButtonBases from './ButtonBases';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



function HomePage(props)   {
  const [mainMenu, setMenu] = useState(
    [
      { name: "Quizzes", link: "/quizzes", url: '/pictures/qustionmarks.png' },
      { name: "More about FES", link: "/information", url: '/picturesFESlogo.jpg' },
      { name: "Review Knowledge", link: "/review", url: '/picturesbuilding.jpg' }
    ]
  );
  const [imageURL, setURL] = useState("");
  const classes = useStyles();

 //  function useEffect() {
    // NOTE had to use arrow function to ensure that 'this' binding was still to
    // the outer class...
     useEffect(() => {
    ImageDatabase.getImage("https://picsum.photos/200").then(imageString => {
      setURL( imageString );
    });
  }, [])
  
  
    return (
      <React.Fragment>
        <img alt="" src={`data:image/jpeg;base64,${imageURL}`} />
        <h1>Home</h1>
        {mainMenu.map(option =>
          ButtonBases(option.name, option.link, option.url)
        )}
        <div>{ButtonBases()}</div>
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
