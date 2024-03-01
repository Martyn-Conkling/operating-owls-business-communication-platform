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
//import channelData from '../../data/channelData'
import channelData from '../../routes/ServerComponent/startingData.json'
import ModalInput from '../ModalInput';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';


export default function Channels(props){
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [channels, setChannels] = React.useState(channelData.channelArray); //to ensure we have responsive channels
    const [showModal, setShowModal] = React.useState(false); //for modal reveal and hide
    const [selectedIndex, setSelectedIndex] = React.useState(props.defaultChannel); //for the selected list item

    React.useEffect(()=> {
        props.setDataStore(channels);
    }, [channels])
   
    console.log('Selected Index ' + selectedIndex);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleAddItem = () => {
        console.log("clicked +");
        setShowModal(true);
    }

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
    
    const deleteItem = (itemId) => {
        setChannels((prevChannels) =>
        prevChannels.filter((channel) => channel.channelID !== itemId));
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleListItemClick = (event, channelId) => {
        setSelectedIndex(channelId);
        props.onSelectChannel(channelId);
    };
    
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
            {showModal && <ModalInput enteredId={channels.length} addItem={addItem} onClose={handleModalClose}/>}                
        </>
    )
}