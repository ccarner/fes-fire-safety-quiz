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
                        <h3></h3>
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