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
import channelData from '../../routes/ServerComponent/startingData.json'
import ModalInput from '../ModalInput';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TagIcon from '@mui/icons-material/Tag';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
//Channel Component displays selection of channels for viewing selection


export default function Channels(props){
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [channels, setChannels] = React.useState(channelData.channelArray); //to ensure channels update whenever we edit
    const [showModal, setShowModal] = React.useState(false); //for modal reveal and hide
    const [selectedIndex, setSelectedIndex] = React.useState(props.defaultChannel); //for the selected list item visual

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

    //ensures channels update with ServerComponent
    React.useEffect(()=> {
        props.setDataStore(channels);
    }, [channels])
   

    //console.log('Selected Index ' + selectedIndex);
    //handles the collapsible menu
    const handleCollapseClick = () => {
        setOpen(!open);
    };

    //opens modal to add new channel
    const handleAddItem = () => {
        console.log("clicked +");
        setShowModal(true);
    }

    //adds new channel to the array
    const addItem = (idInput, nameInput) => {
        //console.log(channels)
        const newChannel = {
            "channelID": idInput,
            "channelName": nameInput,
            "last50MessagesArray":[]
        };
        setChannels( (prevChannels) => 
            [...prevChannels, newChannel
            ]
        );
        setShowModal(false);
        
       // console.log(channels);
    }
    
    //deletes channel by filtering and selecting the channel to delete
    const deleteItem = (itemId) => {
        setChannels((prevChannels) => {

        if(prevChannels.length != 1) {
            //finds the index
            const indexToDelete = prevChannels.findIndex((channel) => channel.channelID === itemId);
            //ensures that we navigate to the channel above
            const updatedChannels = prevChannels.filter((channel) => channel.channelID !== itemId);
            const newIndex = indexToDelete > 0 ? indexToDelete - 1 : 0;
            setSelectedIndex(newIndex);
            props.onSelectChannel(updatedChannels[newIndex].channelID);
            return updatedChannels;
        }
        return prevChannels.filter((channel) => channel.channelID !== itemId);
        }
        );
    }

    //closes modal of adding channel
    const handleModalClose = () => {
        setShowModal(false);
    }

    //shows the visually selected channel within component
    const handleListItemClick = (event, channelId) => {
        setSelectedIndex(channelId);
        props.onSelectChannel(channelId);
    };
    
    //processes data to add channel as a react component
    const channelElements = channels.map(channel => (
        <IndivChannel 
            key={channel.channelID}
            name={channel.channelName}
            onClick={(event)=> handleListItemClick(event, channel.channelID)}
            selected={selectedIndex === channel.channelID}
            deleteChannel={()=> deleteItem(channel.channelID)}
        />
    ))
    
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
            {showModal && <ModalInput enteredId={channels.length} addItem={addItem} onClose={handleModalClose}/>}                
        </>
    )
}