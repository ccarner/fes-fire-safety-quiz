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

function popup(popuptext, buttonfunc, classes){

}

function ButtonBases(name, link, url, callback, classes, popuptext, handleClickOpen, handleClose, selected) {
    //const [open, setOpen] = React.useState(false);
    var text = "Click the start module button to begin"
    var stripped = (name.split(".")[0]).split("-")[1];
    if(popuptext!==""){
        text = popuptext;
    }

    // function handleClickOpen() {
    //     setOpen(true);
    // }



    // function handleClose() {
    //     setOpen(false);
    // }
  
  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={name}
          //component = {Link} to={`${link}`}
          onClick={function() {handleClickOpen(name)}}
          //onClick={function() { callback(link);}}
         // onClick={(link) => { callback(link) }}
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
              {stripped}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <Dialog
                open={selected==name}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id={name}>{"test"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text} {stripped}
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant= 'contained' color="primary" text_transform = "none"
                    classes = {{
                        label: classes.label,
                      }}>
                        Close
          </Button>
                    <Button onClick={function() {callback(link)}
                     //() => {alert(link)}
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