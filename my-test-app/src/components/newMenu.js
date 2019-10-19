import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function ButtonBases(name, link, url, callback, classes, popuptext, handleClickOpen, handleClose, selected) {
  //a placeholder text for when no description is included
    var text = "Click the start module button to begin"
    // a stripped down version of the filename
    //var stripped = (name.split(".")[0]).split("-")[1];
    //if a description is included, replace the default
    if(popuptext!==""){
        text = popuptext;
    }
  
  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={name}
          //when clicked, open the dialog popup box
          onClick={function() {handleClickOpen(link)}}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
          }}
          
          
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
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
        <Dialog
        //this checks if the menu option has been selected, and if it is then open the corresponding dialog box
                open={selected==link}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id={name}>{"test"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text} {name}
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant= 'contained' color="primary" text_transform = "none"
                    classes = {{
                        label: classes.label,
                      }}>
                        Close
          </Button>
                    <Button 
                    //when the button is clicked execute the callback function
                    onClick={
                      function() {callback(link)} 
                    } variant= 'contained' color="primary" text_transform = "none"
                    classes = {{
                        label: classes.label,
                      }}>
                        Start Module
          </Button>
                </DialogActions>
            </Dialog>
    </div>
  );
}


export default ButtonBases;