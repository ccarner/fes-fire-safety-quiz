// The base of this function is obtained from material-ui
// This function is then modified to suit our app

import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <button className="FES_CALL-btn" onClick={handleClickOpen}>Contact FES</button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Contact FES"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Phone:      1300 855 163
                        <h3> </h3>
                        Address:    2/5 Lakeside Dr, Burwood East VIC 3151
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Get Direction
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Call
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}