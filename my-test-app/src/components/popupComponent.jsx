import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    label: {
      textTransform: 'capitalize',
    },
  }));

export default function AlertDialog(popuptext, buttonfunc) {
    const classes = useStyles();
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
        <div>
            {/* <button className="FES_CALL-btn" onClick={handleClickOpen}>Start</button> */}

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