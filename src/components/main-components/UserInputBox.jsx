import React, { useState } from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PaperClip from '../../assets/paperclip-solid.svg'
import PaperPlane from '../../assets/paper-plane.svg'


/*
    EXTRA FEATURE:
    Function to grab the label for the textbox. My ideology is that the textbox should say
    something like 'message to ${channel name}' where channel name is the channel you are currently in.
*/
// function getLabel() {
//     Go to data folder and grab users current channel
//          - We need some sort of use state that gives context to where the
//          is trying to chat
//          - 
//     Send it back to function caller
//          return label;
// }



export default function UserInputBox() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleAttachments = () => {
        console.log('User wants to attach files');
    };

    const handleSend = () => {
        if (!message.trim()) {
            setError('Cannot send empty message!');
            console.log('User tried to send empty message');
            return;
        }

        // Resetting error state if not empty message
        setError('');

        console.log('User wants to send a message');
    };

    return (
        <Box component="section">
            <form noValidate autoComplete="off">
                <TextField
                    label="Message"
                    color="secondary"
                    multiline
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <ButtonGroup size="large" variant="text" aria-label="Basic button group">
                                    <Button onClick={handleAttachments}><img src={PaperClip}/></Button>
                                    <Button onClick={handleSend}><img src={PaperPlane}/></Button>
                                </ButtonGroup>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </Box>
    );
}