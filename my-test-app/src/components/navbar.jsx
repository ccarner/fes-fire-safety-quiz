//import React from "react";
import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { HashLink } from 'react-router-hash-link';
import FES_LOGO from './pictures/FESlogo2.jpg';
import useStyles from './menustyle'



import { Link } from "react-router-dom";


// a stateless functional component in react... since only from props etc
// pass props as arg and don't use 'this'
const NavBar = props => {
  const [page, setpage] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setpage(window.location.href.toString().split(window.location.host + "/app/")[1])

  });
  return (
    <nav className={"navbar navbar-dark bg-dark"} > 
      <IconButton
        //className={classes.button} 
        className={classes.navbarStyle} 

        aria-label="delete"
        component={Link} to='/'
      >
        <HomeIcon 
        //color='secondary'
         />
      </IconButton>
      {/* <HomeIcon //component = {Link} to= '/'
      color = "secondary"
      >

      </HomeIcon> */}
      {/* <Link className="navbar-brand" to="/">
        Home{" "}
      </Link> */}
      {/* <Link className="navbar-brand" to={("/helppage#"+page)}>
        Help{" "}
      </Link> */}
      <IconButton
        className={classes.navbarStyle} 
        aria-label="help"
        component={HashLink} to={("/helppage#" + page)}
      >

        <HelpOutlineIcon 
        //color='secondary' 
        //className="classes.iconstyle"
        />
      </IconButton>
      {/* <a href={("/app/helppage#"+page)}>help</a> */}
      {/* <img alt="" width="75" src={"https://www.fes.com.au/www/wp-content/uploads/2012/08/logo.jpg"} /> */}

      <img alt="" width="85" src={FES_LOGO} />
    </nav>
  );
};

export default NavBar;
