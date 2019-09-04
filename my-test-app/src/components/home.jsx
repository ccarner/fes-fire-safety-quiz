import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ImageDatabase from "../db.js";
import Button from '@material-ui/core/Button'; 

const images = [
  {
    url: 'my-test-app\src\resources\FESlogo.jpg',
    title: 'Quiz',
    width: '40%',
  },
  {
    url: 'my-test-app\src\resources\building.jpg',
    title: 'Checklist',
    width: '30%',
  },
  {
    url: 'my-test-app\src\resources\FESlogo.jpg',
    title: 'Info',
    width: '30%',
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
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

// const testThing = () => {
//   const classes = useStyles();
//   return <Button variant="contained" color="secondary"/>
// }

function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

function HomePage(props)   {
  const [mainMenu, setMenu] = useState(
    [
      { name: "Quizzes", link: "/quizzes" },
      { name: "More about FES", link: "/information" },
      { name: "Review Knowledge", link: "/review" }
    ]
  );
  const [imageURL, setURL] = useState("");
  

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
         {mainMenu.map(option =>
          <Button variant="contained" color="secondary" component = {Link} to={`${option.link}`}>{option.name}</Button>
        )}
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
