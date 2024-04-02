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
//import data from './startingData.json';
import flatData from './flatStartingData.json';
import Channels from "../../components/main-components/Channels"
import moment from 'moment-timezone';
import Search from "../../components/main-components/Search"
import { useLocation } from 'react-router-dom';

//displays mock prototype of showing a server's text channel and channels

export default function ServerComponent() {
   
    
let userSettings = {
    "userId": "u127",
    "username": "PaletteKnife",
    "dateFormat": "USA",
    "darkModeBool": false,
    "messageFormat": "normal",
    "soundNotifications": false,

}

const timeZoneOptions = {
    "timeZone": "America/New_York",
    "year": "numeric",
    "month": "numeric",
    "day":"numeric",
    "hour": '2-digit', 
    "minute": '2-digit', 
    "second": '2-digit', 
    "hour12": true
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
const [dataStore, setDataStore] = useState(flatData); //holds the state of the channels to update when changed
const [selectedChannel, setSelectedChannel] = useState("channelId0"); //defaults selected channel to the first
const [scrollMessageId, setScrollMessageId] = useState(null) //sets an id to scroll to if the search bar is used

const [messagesArray, setMessagesArray] = useState([]);

//connects the selected channel to its corresponding messages
useEffect(() => {
    const selectedChannelID = selectedChannel;
    const selectedChannelData = dataStore.channels?.byId[selectedChannelID];
    if (selectedChannelData) {
        const messageIds = selectedChannelData.messageIds;
        console.log("Message IDs:", messageIds);
        const selectedMessages = messageIds.map(id => dataStore.messages?.byId[id]);
        console.log("Selected Messages:", selectedMessages.filter(message => message));
        setMessagesArray(selectedMessages.filter(message => message));
    }
    //displays no messages if no channels exist
    else{
        setMessagesArray([]);   
    }
    console.log(dataStore)
  }, [dataStore, selectedChannel]);

const scrollToMessage = (id) => {
    setScrollMessageId(id);
}

useEffect(() => {
    if(scrollMessageId) {
        const specificMessage = document.getElementById(scrollMessageId);
        specificMessage.scrollIntoView({behavior: "smooth"});
        setScrollMessageId(null);
    }
}, [scrollMessageId]);


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
    const currentDate = new Date().toISOString();

    
    const updatedNewMessage = {
        ...newMessage,
        messageId: newMessageId,
        timestamp: currentDate,
    };

    // console.log(updatedNewMessage)
    //functional update of messages, ensures most up to date usage of messages
    setMessagesArray(messagesArray => [...messagesArray, updatedNewMessage]);
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


const messageList = messagesArray.map((message, index) => {

    const currentMessageDate = moment.tz(message?.timestamp, timeZoneOptions.timeZone);
    const currentMessageFormattedDate = currentMessageDate.format('MMMM Do, YYYY');
    const currentTime = moment(currentMessageDate).tz(timeZoneOptions.timeZone).format('h:mm A');

    let showDayBreak = true;
    let showUserInfo = true;
    
    const firstMessage = index === 0;
    let previousMessageDate = null;

    if (index > 0){
        const previousMessage = messagesArray[index - 1];
        previousMessageDate = moment.tz(previousMessage?.timestamp, timeZoneOptions.timeZone)

        showDayBreak = !currentMessageDate.isSame(previousMessageDate, 'day');
        const fiveMinBeforeCurrentMessage = moment.tz(message?.timestamp, timeZoneOptions.timeZone).subtract(5, 'minutes');
        showUserInfo = message?.userId !== previousMessage?.userId || previousMessageDate.isBefore(fiveMinBeforeCurrentMessage);
        
    }

    return (
    <>
        {showDayBreak &&(
            <Divider className='date-border' sx={{color: "#808080", fontFamily: "Inter", fontSize: "0.75rem"}}> {currentMessageFormattedDate}</Divider>
        )}

        <div className="message-element" key={index} style={{ marginBottom: '10px' }}
        >
            <MessageComponent 
                displayName={message.username}
                messageContent={message.content}
                time={currentTime}
                displayUserInfo={showUserInfo}
                messageId={message.messageId}
                removeMessage={deleteMessageComponent}
                messageIndex={index}
                />
            {/*
           <div style={{ display: 'flex', alignItems: 'start' }}>
            <img
              src={message?.avatarUrl}
              alt={`${message?.username}'s avatar`}
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
            />
            <h3 style={{ margin: '0px', marginRight: '5px'}}>{message?.username}</h3>
            <p style={{margin: '0px'}}>{currentMessageFormattedDate}</p>
            <p style={{margin: '0px'}}>Message ID: {message?.messageId}</p>
                <div>{message?.content}</div>
            </div>
       
             
          
        )}
        {!showUserInfo && (
            <MessageComponent 
                messageContent={message.content}
                displayAvatar={false}
            />
        )  */}
  
        
    
      </div>
    </>
    );
})

// this is just to cause the message list to scroll to the bottom when the page refreshes or the messages update
// probably need to change this quite a bit later
useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesArray]);


return(
    <>

    <Search 
        selectedChannel={selectedChannel}
        scrollToMessage={scrollToMessage}
        username={username}/> 
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