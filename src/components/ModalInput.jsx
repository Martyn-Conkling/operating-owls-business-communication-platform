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
    addItem: PropTypes.func.isRequired
};

export default function ModalInput(props){
    
    
    const [open, setOpen] = React.useState(true);
   
    const handleClose = () => {
        setOpen(false);
    };

  

    return (
        <React.Fragment>
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
    </React.Fragment>


    )

    
}