import '../../css/Message.css';
import * as React from 'react';
import { useState } from 'react';
import MessageComponent from './Message';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MessageThread(props) {
    const [newMessage, setNewMessage] = React.useState("");
    const [messageList, setMessageList] = React.useState([]);

    function submitMessage() {
        var currentTime = new Date();
        console.log("Sent!")
        setNewMessage("")
        return (
            setMessageList(prevMessageList => [...prevMessageList,
            <MessageComponent
                displayName="FirstName LastName"
                messageContent={newMessage}
                time={currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                displayUserInfo={true}
            />
            ])
        )
    };
    
    const [file, setFile] = useState();
    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const handleSubmit = event => {
        event.preventDefault();
        submitMessage();
        event.target.reset;
    }
    return (
        <div>
            {messageList}
        <div className="chat--box">
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
                label={"Reply to " + props.replytoUser + " . . ."}
                className="new-message-input"
                color="secondary"
                multiline
                fullWidth
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
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
                                    startIcon={<SendIcon htmlColor="black"/>}
                                    type="submit"
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
        </div>
        </div>
    );
}