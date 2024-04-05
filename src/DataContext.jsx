import React, { createContext, useContext, useState } from 'react';
import startingData from './flatStartingData.json'

const DataContext = createContext();

export const useMyContext = () => useContext(DataContext);

export const MyProvider = ({ children }) => {

    const [serverData, setServerData] = useState(startingData)
    const [loginData, setLoginData] = useState(null)
    const [userSettings, setUserSettings] = useState (null)
//   const [channelData, setChannelData] = useState(startingData.channels);
//   const [messagesData, setMessagesData] = useState(startingData.messages);

  const store = {
    serverData,
    sendNewMessage: (newMessage) => setServerData(
        prevData => ({
            channels:{
                ...prevData.channels,
                byId: {
                    ...prevData.channels.byId,
                    [newMessage.channelId]:{
                        ...prevData.channels.byId[newMessage.channelId],
                        messageIds:[...prevData.channels.byId[newMessage.channelId].messageIds, newMessage.messageId]
                    }
                },
                
            },

            messages:{
                ...prevData.messages,
                [newMessage.messageId]: newMessage,
            }

        })
    ),

    createNewChannel: (newChannelData) => setServerData(
        prevData => ({
            
            channels: {
                byId:{
                    ...prevData.channels.byId,
                    [newChannelData.id]: {
                        ...newChannelData
                    }
                },

                allIds:[...prevData.channels.allIds, newChannelData.id],
                allNames:[...prevData.channels.allNames, newChannelData.name]
            },

            messages: {
                ...prevData.messages
            }

        })
    ),

    updateChannelName: (channelData) => setServerData(
        
    )


  };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};