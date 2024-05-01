import React, { createContext, useContext, useState } from 'react';
import startingData from './flatStartingData.json'

const DataContext = createContext();

export const useMyContext = () => useContext(DataContext);

export const MyProvider = ({ children }) => {

    const [serverData, setServerData] = useState(startingData)
    const [loginData, setLoginData] = useState(startingData.userProfile)
    const [userSettings, setUserSettings] = useState (null)

    // const [channelData, setChannelData] = useState(startingData.channels);
    // const [messagesData, setMessagesData] = useState(startingData.messages);

    const store = {
        serverData,
        loginData,
        sendNewMessage: (newMessage) => setServerData(
            prevData => ({
                ...prevData,
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
                ...prevData,
                channels: {
                    byId:{
                        ...prevData.channels.byId,
                        [newChannelData.id]: {
                            ...newChannelData
                        }
                    },

                    allIds:[...prevData.channels.allIds, newChannelData.id],
                   
                },
                messages: {
                    ...prevData.messages
                }
            })
        ),

        updateChannelName: (channelData) => setServerData(
            
        ),


        deleteChannel: (itemId) => setServerData(
            prevData => { 
            //creates new edited channel list
            const newById = {...prevData.channels.byId}
            delete newById[itemId]
            const newAllIds = prevData.channels.allIds.filter(id => id !==itemId)
            
            return {
                ...prevData,
                channels:{
                    byId: newById,
                    allIds: newAllIds,
                },
                messages: {...prevData.messages}
            }
            }
        )
    };


    return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};
