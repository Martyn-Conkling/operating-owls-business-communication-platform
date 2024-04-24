import { useState, useEffect, useRef } from 'react'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageComponent from "../../components/main-components/Message.jsx";
import Divider from "@mui/material/Divider";
import './ServerStyles.css';
import flatData from '../../flatStartingData.json';
import Channels from "../../components/main-components/Channels"
import moment from 'moment-timezone';
import Search from "../../components/main-components/Search"
import { useLocation } from 'react-router-dom';

import { useMyContext } from '../../DataContext';

import Fade from '@mui/material/Fade';
//displays mock prototype of showing a server's text channel and channels

export default function ServerComponent() {
   
    
let userSettings = {
    "userId": "u127",
    "username": "PaletteKnife",
    "dateFormat": "USA",
    "darkModeBool": false,
    "messageFormat": "normal",
    "soundNotifications": false,

    "timeZoneOptions":{
        "timeZone": "America/New_York",
        "year": "numeric",
        "month": "numeric",
        "day":"numeric",
        "hour": '2-digit', 
        "minute": '2-digit', 
        "second": '2-digit', 
        "hour12": true
    }

}


let userPermissions = {};

let serverSettings = {};

let blankMessage = {
    "messageId": null,
    "userId": userSettings.userId,
    "timestamp": null,
    "username": userSettings.username,
    "content":""
}

let email = "exampleEmail@email.com";
let username = "someUsername";
const location = useLocation();
try {
if (location.state.isLoggedIn === true) {
    username = location.state.username
    email = location.state.email
    console.log(`the user is logged in their email is ${email} and username is ${username}`)
} else {
    console.log("user is not logged in using dummy data")
}} catch {console.log("user is not logged in")}


const messagesEndRef = useRef(null);

const {serverData, sendNewMessage, createNewChannel} = useMyContext();
// Martyn To Dos
//  When the page loads, the first channel in the channel list should be selected from the shared context - done



const [dataStore, setDataStore] = useState(flatData); //holds the state of the channels to update when changed
const [selectedChannel, setSelectedChannel] = useState(serverData.channels.allIds[0]);
const [scrollMessageId, setScrollMessageId] = useState() //sets an id to scroll to if the search bar is used


const [messagesArray, setMessagesArray] = useState([]);



const scrollToMessage = (id) => {

    setScrollMessageId(null)
    setTimeout(() => {
        setScrollMessageId(id);
    }, "10");
}

useEffect(() => {
    if(scrollMessageId) {
        const specificMessage = document.getElementById(scrollMessageId);
        if (specificMessage){
           specificMessage.scrollIntoView({ behavior: "smooth"});
        }
    }
}, [scrollMessageId]);


const [newMessage, setNewMessage] = useState(blankMessage);


const [error, setError] = useState('');

const handleChannelSelect = (channelId) => {
    setSelectedChannel(channelId);
}


// const {serverData, sendNewMessage, createNewChannel} = useMyContext();

const handleSendMessage = () => {
   
    if (!newMessage.content.trim()){
        setError('Cannot send empty message!');
            console.log('User tried to send empty message');
            return; // Prevents sending empty messages
    } 

    // console.log(newMessage);
    // This assumes that the last message in the messagesArray will have the latest ID value
    const messageArrayLength = serverData.channels.byId[selectedChannel].messageIds.length
    const lastMessageId =  messageArrayLength > 0 ? serverData.channels.byId[selectedChannel].messageIds[messageArrayLength - 1] : 0;
    // We probably need a better implementation for creating unique message Ids
    const newMessageId = String(Number(lastMessageId) + 1);
    const currentDate = new Date().toISOString();

    /* Example of message data structure
        {
        "channelId": "channelId0",
        "messageId": "u1231001",
        "userId": "u123",
        "username": "ArtLover99",
        "timestamp": "2024-02-22T10:00:00Z",
        "content": "Hey everyone, just wanted to share my latest attempt at a Bob Ross painting. It's not perfect, but I'm getting better!"
        },

    */

    const updatedNewMessage = {
        ...newMessage,
        channelId: selectedChannel,
        messageId: newMessageId,
        timestamp: currentDate,
    };

    // console.log(updatedNewMessage)
    //functional update of messages, ensures most up to date usage of messages
    sendNewMessage(updatedNewMessage)
    // setMessagesArray(messagesArray => [...messagesArray, updatedNewMessage]);
    setNewMessage(blankMessage); // Clear the input after sending


    // Optionally, here you can also call a function to send the update to the RESTful API
    // Example: sendMessageToAPI(updatedNewMessage);
};

// functionality for deleting a message from the array


const deleteMessageComponent = (index) => {
    setMessagesArray((messagesArray => {
        const updatedMessagesArray = [...messagesArray];
        updatedMessagesArray.splice(index, 1);
        return updatedMessagesArray;
    }))
}




const messageList = serverData.channels.byId[selectedChannel].messageIds.map((messageId, index) => {
    // I am using the moment-timezone library to filter how the timestamps are displayed to be based on the user's timezone and time/date display options
    const currentMessageDate = moment.tz(serverData.messages[messageId].timestamp, userSettings.timeZoneOptions.timeZone);
    const currentMessageFormattedDate = currentMessageDate.format('MM-DD-YYYY');
    // const currentMessageFormattedDate = currentMessageDate.format('MMMM Do, YYYY');
    const currentTime = moment(currentMessageDate).tz(userSettings.timeZoneOptions.timeZone).format('h:mm A');

    let showDayBreak = true;
    let showUserInfo = true;
    
    const firstMessage = index === 0;
    let previousMessageDate = null;

    if (index > 0){
        const previousMessageId = serverData.channels.byId[selectedChannel].messageIds[index -1]
        const previousMessage = serverData.messages[previousMessageId]
        // const previousMessage = messagesArray[index - 1];
        previousMessageDate = moment.tz(previousMessage?.timestamp, userSettings.timeZoneOptions.timeZone)

        showDayBreak = !currentMessageDate.isSame(previousMessageDate, 'day');
        const fiveMinBeforeCurrentMessage = moment.tz(serverData.messages[messageId]?.timestamp, userSettings.timeZoneOptions.timeZone).subtract(5, 'minutes');
        showUserInfo = serverData.messages[messageId]?.userId !== previousMessage?.userId || previousMessageDate.isBefore(fiveMinBeforeCurrentMessage);
        
    }

    return (
    <>
        {showDayBreak &&(
            <Divider  className='date-border' sx={{color: "#808080", fontFamily: "Inter", fontSize: "0.75rem"}}> {currentMessageFormattedDate}</Divider>
        )}

        {(scrollMessageId===serverData.messages[messageId].messageId) ?  (
            //fades in the message selected
            <Fade key={scrollMessageId} in={true} timeout={2000}>
            <div id={serverData.messages[messageId].messageId} className="message-element" key={serverData.messages[messageId].messageId} style={{ marginBottom: '10px' }}
            > 
            
                <MessageComponent 
                    displayName={serverData.messages[messageId].username}
                    messageContent={serverData.messages[messageId].content}
                    time={currentTime}
                    displayUserInfo={showUserInfo}
                    messageId={serverData.messages[messageId].messageId}
                    removeMessage={deleteMessageComponent}
                    messageIndex={index}
                    />
            
            </div>
            </Fade>
    ): (<div id={serverData.messages[messageId].messageId} className="message-element" key={serverData.messages[messageId].messageId} style={{ marginBottom: '10px' }}
            >
                <MessageComponent 
                    displayName={serverData.messages[messageId].username}
                    messageContent={serverData.messages[messageId].content}
                    time={currentTime}
                    displayUserInfo={showUserInfo}
                    messageId={serverData.messages[messageId].messageId}
                    removeMessage={deleteMessageComponent}
                    messageIndex={index}
                    />
            </div>)}
    </>
    );
})

// this is just to cause the message list to scroll to the bottom when the page refreshes or the messages update


// Need to figure out how to refactor this according to the new shared data context
useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesArray]);


return(
    <>

    {/* <Search 
        selectedChannel={selectedChannel}
        scrollToMessage={scrollToMessage}
        username={username}/>  */}
    <div className="server-container" > 

    <div id='channel-list'>
    {/* pass the channel selection, default channel, and update channels as props */}
    <Channels 
        onSelectChannel={handleChannelSelect}
        defaultChannel={selectedChannel}
        setDataStore={setDataStore}
    />
</div>

<div id='chat-section'>

    {/* connects channels selected channel name to display */}
    <h2>Text Channel: {dataStore.channels?.byId[selectedChannel]?.name}</h2>

    <div id='message-list'>
        {messageList}
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


    </div>
        
          

</div>

</div>
</>

)}