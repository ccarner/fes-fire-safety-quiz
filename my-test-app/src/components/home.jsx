import React, { Component } from "react";
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



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: [
        { name: "Quizzes", link: "/quizzes" },
        { name: "More about FES", link: "/information" },
        { name: "Review Knowledge", link: "/review" }
      ],
      imageURL: ""
      
    };
  }
  

  componentDidMount() {
    // NOTE had to use arrow function to ensure that 'this' binding was still to
    // the outer class...
    ImageDatabase.getImage("https://picsum.photos/200").then(imageString => {
      this.setState({ imageURL: imageString });
    });
  }

  render() {
    return (
      <React.Fragment>
        <img alt="" src={`data:image/jpeg;base64,${this.state.imageURL}`} />
        <h1>Home</h1>
        {this.state.mainMenu.map(option =>
          this.renderMenuOption(option.name, option.link)
        )}
      </React.Fragment>
    );
  }

  renderMenuOption(name, link) {
    return (
      <div>
          <Link to={`${link}`}>{name}</Link>
      </div>
    );
  }

}

export default HomePage;
