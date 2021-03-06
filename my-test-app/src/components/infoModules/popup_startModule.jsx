import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }



    function handleClose() {
        setOpen(false);
    }

    function myFunction() {
        //alert("you just clicked start");
        //window.location.href= '/intro_to_fire_safety.html' ;
        window.location.href= '/informationModule' ;
        //document.getElementById('body').innerHTML = 
        //              loadPage('intro_to_fire_safety.html');
    }

    function loadPage(href)
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    return (
        <div>
            <button className="FES_CALL-btn" onClick={handleClickOpen}>Start</button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Intro to Fire Safety"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This module is aimed to introduce you to the principles and importance of fire safety.
    The module will detail why preperation is the most important aspect of being fire safe,
     and what attitudes you should have in the event of an emergency.
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                    <Button onClick={myFunction} color="primary">
                        Start Module
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}