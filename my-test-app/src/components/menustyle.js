import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//a styling sheet for menu components using react hooks, only call this in top level and only call it once, then pass it down
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),

    primary: "red"
  },
  input: {
    display: "none"
  },
  label: {
    textTransform: "none"
  },
  iconstyle: {
    // background: "linear-gradient(to right bottom, #bfbfbf, #808080)",
    //backgroundColor: "#bfbfbf",
    // color: "#ed1e1a",

    fontSize: 80
  },
  backgroundButtonStyle: {
    // background: "linear-gradient(to right bottom, #bfbfbf, #808080)"
    background: "linear-gradient(to right bottom, #ed1e1a, #808080)"
  },
  navbarStyle: {
    //background: 'linear-gradient(to right, #bfbfbf, #808080)',
    color: "#ed1e1a",
    "&:hover":{
      backgroundColor: "transparent",
      color: "#ed1e1a"
    }
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    borderTop: "4px solid red",
    position: "relative",
    minHeight: 100,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important" // Overrides inline-style
      //height: '30vh',
      //height: '25%',
    },
    background: "linear-gradient(to right bottom, #ed1e1a, #808080)",
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   minWidth: 300,
    //   width: '100%',
    // },
    // image: {
    //   position: 'relative',
    //   height: 300,
    //   [theme.breakpoints.down('xs')]: {
    //     width: '100% !important', // Overrides inline-style
    //     height: 100,
    //   },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
        //border: '4px solid red'
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
        backgroundColor: "red"
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
    backgroundPosition: "center 40%",
    backgroundColor: red
  },
  imageBackdrop: {
    //color: 'black',
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

export default useStyles;
