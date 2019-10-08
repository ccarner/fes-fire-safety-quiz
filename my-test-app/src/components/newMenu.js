import React from 'react';
import { Link, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ButtonBases(name, link, url, callback, classes) {
    const [open, setOpen] = React.useState(false);
    var text = "Click the start module button to proceed"
    if(popuptext!=""){
        text = popuptext;
    }

    function handleClickOpen() {
        setOpen(true);
    }



    function handleClose() {
        setOpen(false);
    }
  
  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={name}
          //component = {Link} to={`${link}`}
          onClick={function() { callback(link);}}
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
              {name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Intro to Fire Safety"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant= 'contained' color="primary" text_transform = "none"
                    classes = {{
                        label: classes.label,
                      }}>
                        Close
          </Button>
                    <Button onClick={buttonfunc} variant= 'contained' color="primary" text_transform = "none"
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