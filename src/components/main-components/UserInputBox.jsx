import { useState } from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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

export default function UserInputBox(props) {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [file, setFile] = useState();

    const handleSend = () => {
        if (!message.trim()) {
            return;
        }

        console.log('Selected file:', file);

        // Resetting error state if not empty message
        setError('');

        console.log(`User wants to send a message: ${message}`);
        setMessage('');
    };

    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <Box component="section">
            <form noValidate autoComplete="off">
                <TextField
                    label={"Reply to " + props.replytoUser + " . . ."}
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
                                            onChange={getFile}
                                        />
                                    </Button>
                                    <Button
                                        onClick={props.reply}
                                        startIcon={<SendIcon htmlColor="black" />}
                                    >
                                    </Button>
                                </ButtonGroup>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
            {file && (
                <div>
                    <Document
                        file={file}
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div>
            )}
        </Box>
    );
}