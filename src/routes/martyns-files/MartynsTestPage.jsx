import { useState, useEffect, useRef } from 'react'

import './ServerStyles.css';
import data from './startingData.json';




export default function MartynsTestPage(){



let blankMessage = {
    "messageId": null,
    "userId": "u127",
    "timestamp": null,
    "username": "PaletteKnife",
    "content":""
}

const messagesEndRef = useRef(null);


const [dataStore, setDataStore] = useState(data);
const [selectedChannel, setSelectedChannel] = useState(0);


const [messagesArray, setMessagesArray] = useState([...dataStore["channelArray"][selectedChannel]["last50MessagesArray"]]);

const [newMessage, setNewMessage] = useState(blankMessage);


const handleSendMessage = (event) => {
   
    if (!newMessage.content.trim()) return; // Prevents sending empty messages

    // console.log(newMessage);
    // This assumes that the last message in the messagesArray will have the latest ID value

    const lastMessageId = messagesArray[messagesArray.length-1].messageId;
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
<h2>Text Channels</h2>
<input type="text" />
<button>Create Channel</button>
    {dataStore["channelArray"].map((channelData, index) => (
        <div className={`channel-element ${channelData.selectedBool ? 'selected-channel' : ''}`}
            key={index}>

            <h3>{channelData.channelName}</h3>
          
        </div>

    ))}
   

</div>

<div id='chat-section'>
    <h2>Text Channel:{dataStore["channelArray"][selectedChannel]["channelName"]}</h2>
    
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
    <textarea 
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
          >Send</button>


    </div>
        
          



</div>
        

</div>
</>)}