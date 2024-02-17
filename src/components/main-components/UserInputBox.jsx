import { useState } from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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

    const handleSend = () => {
        if (!message.trim()) {
            setError('Cannot send empty message!');
            console.log('User tried to send empty message');
            return;
        }

        // Resetting error state if not empty message
        setError('');

        console.log(`User wants to send a message: ${message}`);
        setMessage('');
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
                                <ButtonGroup size="large" variant="elevated" aria-label="Basic button group">
                                    <Button
                                        component="label"
                                        startIcon={<AttachFileIcon htmlColor="black" />}
                                    >
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                    <Button
                                        onClick={handleSend}
                                        startIcon={<SendIcon htmlColor="black" />}
                                    >
                                    </Button>
                                </ButtonGroup>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </Box>
    );
}