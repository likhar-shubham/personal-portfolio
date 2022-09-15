import * as React from 'react';
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


function DialogBox(props) {
    
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Thanks for your response! I will get back to you ASAP.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} autoFocus>
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

DialogBox.propTypes = {
}

export default DialogBox
