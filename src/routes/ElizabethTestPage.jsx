import React from 'react';
import MessageInput from '../components/EmojiComponent/MessageInput';
const ChatPage = () => {
  const sendMessage = (message) => {
  console.log('Sending message:', message); //For testing purposes for "sending~ doesn't go anywhere~ integrate with server comp??"//
  };

return (
    <div>
      <h1>Chat</h1>
      <MessageInput onSendMessage={sendMessage} />

    </div>
  );

};

export default ChatPage;
