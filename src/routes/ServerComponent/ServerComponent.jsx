import { useState, useEffect, useRef } from 'react'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';


import './ServerStyles.css';
import data from './startingData.json';
import Channels from "../../components/main-components/Channels"



export default function ServerComponent(){



let blankMessage = {
    "messageId": null,
    "userId": "u127",
    "timestamp": null,
    "username": "PaletteKnife",
    "content":""
}

const messagesEndRef = useRef(null);


const [dataStore, setDataStore] = useState(data.channelArray);
const [selectedChannel, setSelectedChannel] = useState(0);


const [messagesArray, setMessagesArray] = useState([]);
useEffect(() => {
    const selectedChannelID = selectedChannel;
    const selectedChannelData = dataStore.find(channel => channel.channelID === selectedChannelID);
    if (selectedChannelData) {
        setMessagesArray([...selectedChannelData["last50MessagesArray"]]);
    }
    console.log(dataStore)
  }, [dataStore, selectedChannel]);


const [newMessage, setNewMessage] = useState(blankMessage);


const [error, setError] = useState('');

const handleChannelSelect = (channelId) => {
    setSelectedChannel(channelId);
}

const handleSendMessage = (event) => {
   
    if (!newMessage.content.trim()){
        setError('Cannot send empty message!');
            console.log('User tried to send empty message');
            return; // Prevents sending empty messages
    } 

    // console.log(newMessage);
    // This assumes that the last message in the messagesArray will have the latest ID value

    const lastMessageId =  messagesArray.length > 0 ? messagesArray[messagesArray.length - 1].messageId : 0;
    const newMessageId = String(Number(lastMessageId) + 1);
    const timestamp = new Date().toISOString();

    const updatedNewMessage = {
        ...newMessage,
        messageId: newMessageId,
        timestamp: timestamp,
    };

    // console.log(updatedNewMessage)
    //functional update of messages, ensures most up to date usage of messages
    setMessagesArray(messagesArray => [...messagesArray, updatedNewMessage]);
    setNewMessage(blankMessage); // Clear the input after sending


    // Optionally, here you can also call a function to send the update to the RESTful API
    // Example: sendMessageToAPI(updatedNewMessage);
};


// this is just to cause the message list to scroll to the bottom when the page refreshes or the messages update
// probably need to change this quite a bit later
useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesArray]);


return (


<>
<div className="server-container">

<div id='channel-list'>
    <Channels 
        onSelectChannel={handleChannelSelect}
        defaultChannel={selectedChannel}
        setDataStore={setDataStore}
    />

 {/*   
<h2>Text Channels</h2>
<input type="text" />
<button>Create Channel</button>
    {dataStore["channelArray"].map((channelData, index) => (
        <div className={`channel-element ${channelData.selectedBool ? 'selected-channel' : ''}`}
            key={index}>

            <h3>{channelData.channelName}</h3>
          
        </div>

    ))}
   
    */  }
</div>

<div id='chat-section'>
    <h2>Text Channel: {dataStore.find(channel => channel.channelID === selectedChannel)?.channelName}</h2>

    
    <div id='message-list'>
        {/* dynamically renders the messages based on data */}
        {messagesArray.map((message, index) => (
        
        <div className='message-element' key={index}>
            <h3>{message.username}</h3>
            <p>User ID: {message.userId}</p>
            <p>Timestamp:{message.timestamp}</p>
            <p>Message ID: {message.messageId}</p>
            <p>Message Content: {message.content}</p>
    
        </div>
        ))}

        {/* This ref is used to cause the message list to scroll down to the bottom by defautl */}
        <div ref={messagesEndRef} />
    </div>
        


    <div>

    <Box component="section">
            <form noValidate autoComplete="off">
                <TextField
                    label="Type a message..."
                    color="secondary"
                    multiline
                    fullWidth
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
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
                                        onClick={handleSendMessage}
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



    {/* <textarea 
            name="" 
            id="text-box" 
            cols="30" 
            rows="3"
            value={newMessage.content}
            onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
            placeholder="Type a message..."
          
          >
          
          </textarea>
          <button 
            onClick={handleSendMessage}
          >Send</button> */}


    </div>
        
          



</div>
        

</div>
</>)}