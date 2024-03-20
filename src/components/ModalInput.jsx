import * as React from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

ModalInput.propTypes = {
    enteredId: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

//modal component allows for adding new channels 
export default function ModalInput(props){
    const [open, setOpen] = React.useState(true); //for making modal appear/disappear
   
    {/* function to close modal */}
    const handleClose = () => {
        setOpen(false);
        
        props.onClose();
    };


    return (
        <React.Fragment>
            {/* creates form to fill in channel name for the channel creation, uses FormData to parse the entered info  */}
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    //console.log(formData);
                    const name = formData.get('channelName');
                    //console.log(name);
                    props.addItem(props.enteredId, name);
                    handleClose();
                },
                }}
            >
                <DialogTitle>Create new channel</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="channelName"
                        name="channelName"
                        label="Channel Name"
                        type="name"
                        fullWidth
                        variant="standard"
                        autoComplete="off"
                        color="info"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                    <Button type="submit" color="success">Submit</Button>
                </DialogActions>
            </Dialog>
    </React.Fragment>


    )

    
}