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
      { name: "Quizzes", link: "/quizzes" },
      { name: "More about FES", link: "/information" },
      { name: "Review Knowledge", link: "/review" }
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
          renderMenuOption(option.name, option.link)
        )}
        <div>{ButtonBases}</div>
      </React.Fragment>
    );

  

}
 function renderMenuOption(name, link) {
    return (
      <div>
        {/* <Button variant="contained" color="secondary" component = {Link} to={`${link}`}>{name}</Button> */}
          <Link to={`${link}`}>{name}</Link>
      </div>
    );
  }
export default HomePage;
