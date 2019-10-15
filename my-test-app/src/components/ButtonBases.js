import React from 'react';
import { Link, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

//the function that returns a screen width image containing menu option
function ButtonBases(name, link, url, callback, classes) {
  
  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={name}
          //uses a callback function passed into the button when it is clicked
          onClick={function() { callback(link);}}
         // onClick={(link) => { callback(link) }}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
            //color: red,
          }}
          
          
        >
          <span
            className={classes.imageSrc}
            style={{
              //passes the url of the background 
              backgroundImage: `url(${url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            
            <Typography
            //controls how the text appears on the button
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}np
            >
              {name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>
  );
}


export default ButtonBases;