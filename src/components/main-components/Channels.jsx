import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
//import IndivChannel from '../IndivChannel';
import AddIcon from '@mui/icons-material/Add';
//import channelData from '../../data/channelData'
//import channelData from '../../routes/ServerComponent/startingData.json'
//import flatChannelData from '../../flatStartingData.json'
import ModalInput from '../ModalInput';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TagIcon from '@mui/icons-material/Tag';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMyContext } from '../../DataContext';

//Channel Component displays selection of channels for viewing selection


export default function Channels(props){

    const {serverData, createNewChannel, deleteChannel} = useMyContext();
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const channels = serverData; //no longer need react state 
    //const [channels, setChannels] = React.useState(serverData); //to ensure channels update whenever we edit
    const [showModal, setShowModal] = React.useState(false); //for modal reveal and hide
    const [selectedChannel, setSelectedChannel] = React.useState(props.defaultChannel); //for the selected list item visual


    //moved from componentized indivChannel to returning it within this component
    const IndivChannel = (props) => {
        return (
            <ListItem 
                sx={{
                    '&:hover .hover-visible': {
                        display: 'block',
                    },
                    '& .hover-visible': {
                        display: 'none',
                    },
                }}

                secondaryAction={
                    <IconButton edge="end" aria-label="deleteChannel" className="hover-visible" onClick={props.deleteChannel} >
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            > 
                <ListItemButton 
                    sx={{ pl: 4 }} 
                    {...props}
                    
                >
                    <ListItemIcon>
                        <TagIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${props.name}`} />
                </ListItemButton>
            </ListItem>       
            );
    };

   
    //console.log('Selected Index ' + selectedIndex);
    //handles the collapsible menu
    const handleCollapseClick = () => {
        setOpen(!open);
    };

    //opens modal to add new channel
    const handleAddItem = () => {
        setShowModal(true);
    }

    //adds new channel to the array
    const addItem = (idInput, nameInput) => {
        //console.log(channels)
        const newChannel = {
            "id": idInput,
            "name": nameInput,
            "messageIds":[]
        };
        //updates the data context and thus should update everything else
        createNewChannel(newChannel)
        setShowModal(false);
    }
    
    //deletes channel by filtering and selecting the channel to delete
    const deleteItem = (itemId) => {
        const prevChannels = serverData;

        //procedure to go to the channel directly above the deleted channel
        if(itemId === selectedChannel){
            const newIndex = prevChannels.channels.allIds.indexOf(itemId) > 0 ? prevChannels.channels.allIds.indexOf(itemId) - 1 : 0;
            setSelectedChannel(prevChannels.channels.allIds[newIndex]);
            props.onSelectChannel(prevChannels.channels.allIds[newIndex]);
        }
        deleteChannel(itemId);
    }
    
    //closes modal of adding channel
    const handleModalClose = () => {
        setShowModal(false);
    }

    //shows the visually selected channel within component
    const handleListItemClick = (event, channelId) => {
        console.log(channelId)
        setSelectedChannel(channelId);
        props.onSelectChannel(channelId);
    };
    
    //processes data to add channel as a react component
    const channelElements = channels.channels.allIds.map(id => {
        const channel = channels.channels.byId[id];
        return (
            <IndivChannel 
            key={channel?.id}
            name={channel?.name}
            onClick={(event)=> handleListItemClick(event, channel?.id)}
            selected={selectedChannel === channel?.id}
            deleteChannel={()=> deleteItem(channel?.id)}
        />
        )
    })
    
    return (
        <>
            {/* Houses the list of channels */}
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> 
                <nav>
                    <List component="nav">
                        
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="addChannel"  onClick= {handleAddItem}>
                                    <AddIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                        {/* Channel Header*/}
                            <ListItemButton onClick={handleCollapseClick} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>

                                {/*
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                */}
                                <ListItemText primary="Channels" sx={{pl:1, }}  primaryTypographyProps={{ fontWeight: 'bold' }}/>
                                {open ? <ExpandLess /> : <ExpandMore />}

                            </ListItemButton>
                        </ListItem>
                        {/* channel elements are displayed within the div */}
                        <Collapse in={open} unmountOnExit>
                            <List component="div">
                                {channelElements}
                            </List>
                        </Collapse>
                       
                    </List>
                </nav>
            </Box>
            {showModal && <ModalInput enteredId={'channelId'+ channels.channels.allIds.length} addItem={addItem} onClose={handleModalClose}/>}                
        </>
    )
}