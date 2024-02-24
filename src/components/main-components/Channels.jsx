import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import IndivChannel from '../IndivChannel';
import AddIcon from '@mui/icons-material/Add';
import channelData from '../../data/channelData'
import ModalInput from '../ModalInput';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';


export default function Channels(){
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [channels, setChannels] = React.useState(channelData); //to ensure we have responsive channels
    const [showModal, setShowModal] = React.useState(false); //for modal reveal and hide
    const [selectedIndex, setSelectedIndex] = React.useState(1); //for the selected list item

    const handleClick = () => {
        setOpen(!open);
    };

    const handleAddItem = () => {
        console.log("clicked +");
        setShowModal(true);
    }

    const addItem = (idInput, nameInput) => {
        setChannels( (prevChannels) => 
            [...prevChannels,
                {
                    id: idInput,
                    name: nameInput
                }
            ]
        );

        setShowModal(false);
    }
    
    const deleteItem = (itemId) => {
        setChannels((prevChannels) =>
        prevChannels.filter((channel) => channel.id !== itemId));
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    
    const channelElements = channels.map(channel => (
        <IndivChannel 
            key={channel.id}
            name={channel.name}
            onClick={(event)=> handleListItemClick(event, channel.id)}
            selected={selectedIndex === channel.id}
            deleteChannel={()=> deleteItem(channel.id)}
        />
    ))
    
    return (
        <>
            <h1>Welcome to Ashton's Test page</h1>
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
                       
                        <ListItemButton onClick={handleClick} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>

                            {/*
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            */}
                            <ListItemText primary="Channels" sx={{pl:1, }}  primaryTypographyProps={{ fontWeight: 'bold' }}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                            
                            
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={open} unmountOnExit>
                            <List component="div">
                                {channelElements}
                            </List>
                        </Collapse>
                       
                    </List>
                </nav>
            </Box>
            {showModal && <ModalInput enteredId={channels.length + 1} addItem={addItem} onClose={handleModalClose}/>}                
        </>
    )
}