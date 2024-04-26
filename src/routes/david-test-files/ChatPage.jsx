import { useState, useEffect, useRef } from 'react';
import rawChatData from './testingData.json';

export default function ChatPage() {
    class Channel {
        constructor(channelID, channelName, channelMessageArray) {
            this.channelID = channelID;
            this.channelName = channelName;
            this.channelMessageArray= channelMessageArray;
        }
    }

    const [chatData, setChatData] = useState(rawChatData);
    const channelArray = [];
    chatData['channelArray'].forEach(channel => {
        const newChannel = new Channel(channel.channelID, channel.channelName, channel.last50MessagesArray);
        channelArray.push(newChannel);
    });

    let newChannelCount = 0;
    const endMessageReference = useRef(null);
    const [selectedChannel, setSelectedChannel] = useState(0);

    const [messagesData, setMessagesData] = useState(channelArray[selectedChannel].channelMessageArray);
    

    let lastMessageId = String(messagesData[messagesData.length - 1].messageId);
    let timestamp = new Date().toISOString();
    
    let userMessage = {
        "messageId": lastMessageId,
        "userId": "u129",
        "timestamp": timestamp,
        "username": "butters",
        "content":""
    }

    const [newUserMessage, setNewUserMessage] = useState(userMessage);

    
    const handleSendMessage = (event) => {

        if (!newUserMessage.content.trim()) return; 
    
        // console.log(newMessage);
        // This assumes that the last message in the messagesArray will have the latest ID value
    
        const newMessageId = String(Number(lastMessageId) + 1);
        const newTimestamp = new Date().toISOString();
    
        const updatedNewMessage = {
            ...newUserMessage,
            messageId: newMessageId,
            timestamp: newTimestamp,
        };
    
        setMessagesData(messagesData => [...messagesData, updatedNewMessage]);
        setNewUserMessage(userMessage); // Clear the input after sending
    
    };

    const handleSetChannel = (e) => {
        channelArray.forEach(channel => {
            if(channel.channelName == e.target.innerText) {
                setSelectedChannel(channel.channelID);
                setMessagesData(channel.channelMessageArray)
            }
        })
        
    }

    const handleNewChannel = (e) => {
        newChannelCount++;
        const insertChannel = {
            channelID: channelArray.length,
            channelName: `Channel ${newChannelCount}`,
            channelMessageArray: []
        }

        const newChannel = new Channel(insertChannel.channelID, insertChannel.channelName, insertChannel.channelMessageArray);
        channelArray.push(newChannel);
        console.log(channelArray);
    }

    useEffect(() => {
        endMessageReference.current?.scrollIntoView({ behavior: "smooth" });
    }, [messagesData]);

    return (
        <div className='main--container'>
            <div className="sidebar">
                <div className="channel--container">
                    <div className='channel--header'>    
                        <h1>{channelArray[selectedChannel].channelName}</h1>
                        <i className="fa-solid fa-plus channel--plus" onClick={(e) => handleNewChannel(e)}></i>
                    </div >
                    <div onChange={(e) => handleNewChannel(e)}>
                        {channelArray.map((channel, index) => (
                            <div key={index}>
                                <button className="sidebar--channel" onClick={(e) => handleSetChannel(e)}>{channel.channelName}</button>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="chat--container">
                <div className="chat--messages">
                    {messagesData.map((message, index) => (
                        <div className='chat--style' key={index}>
                            <h3>{message.username}</h3>
                            <p>User ID: {message.userId}</p>
                            <p>Timestamp:{message.timestamp}</p>
                            <p>Message ID: {message.messageId}</p>
                            <p>Message Content: {message.content}</p>
                        </div>
                    ))}
                    <div ref={endMessageReference} />
                </div>
                <div className="chat--input-container">
                    <textarea
                    className="chat--input"
                    placeholder="Input Text Here"
                    onChange={(e) => setNewUserMessage({...userMessage, content: e.target.value})}
                    ></textarea> 
                    <button className="chat--send" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}