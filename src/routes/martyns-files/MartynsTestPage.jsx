import { useState, useEffect, useRef } from 'react'

import './ServerStyles.css';
import data from './startingData.json';




export default function MartynsTestPage(){




// ...dataStore["channel10001"]["last50MessagesArray"]
// let startingMessages = dataStore["channel10001"]["last50MessagesArray"].map(element => element);
const [dataStore, setDataStore] = useState(data)


const [messages, setMessages] = useState([...dataStore["channel10001"]["last50MessagesArray"]]);

let blankMessage = {
    "messageID": null,
    "userID": null,
    "timestamp": null,
    "username": "Joe Dirt",
    "content":""

}

const messagesEndRef = useRef(null);

const [newMessage, setNewMessage] = useState(blankMessage);

function initializeMessagesArray(){
    setMessages([...startingMessages]) 

}

const handleSendMessage = (event) => {
   
    if (!newMessage.content.trim()) return; // Prevents sending empty messages

    setMessages([...messages, newMessage]);//adds the new message to the messages array
    setNewMessage(blankMessage); // Clear the input after sending
};

// this is just to cause the message list to scroll to the bottom when the page refreshes or the messages update
// probably need to change this quite a bit later
useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


return (


<>
<div className="server-container">

<div id='channel-list'>
    {
        dataStore.map
    }

</div>

<div id='chat-section'>
    <h2>This is the chat channel</h2>
    
    <div id='message-list'>
        {/* dynamically renders the messages based on data */}
        {messages.map((message, index) => (
        
        <div className='message-element' key={index}>
            <h3>{message.username}</h3>
            <p>{message.content}</p>
            <p>{message.timestamp}</p>
    
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