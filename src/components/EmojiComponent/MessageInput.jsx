import React, { useState, useRef, useEffect } from 'react';
import { TextField, IconButton } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import { EmojiButton } from '@joeattardi/emoji-button';

const MessageInput = ({ onSendMessage }) => {
const [message, setMessage] = useState('');
const emojiPicker = useRef(null);

  const handleToggleEmojiPicker = () => {
    // This is just grabbing the button element with the id of "anchor" directly from the DOM, 
    // I suspect this is not how I should do this
    // look up if there is a correct react way to do this
    let anchor = document.querySelector('#anchor')
     emojiPicker.current.togglePicker(anchor);
  };




  const handleSendMessage = () => {
    if (message.trim() !== '') {
    onSendMessage(message);
       setMessage('');
    }
  };



  useEffect(() => {
    emojiPicker.current = new EmojiButton();

    emojiPicker.current.on('emoji', (selection) => {
      setMessage((prevMessage) => prevMessage + selection.emoji);
    });
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <TextField

        label="Type a message..."
         variant="outlined"
        fullWidth
     value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          endAdornment: (
            <>
              <IconButton id="anchor" onClick={handleToggleEmojiPicker} size="large">
                😊
              </IconButton>

              <IconButton onClick={handleSendMessage} size="large">
                <SendIcon />
              </IconButton>
            </>
          ),
        }}
      />
    </div>
  );
};
export default MessageInput;

