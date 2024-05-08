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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IndivChannel from '../IndivChannel';
import { select } from '@nextui-org/react';
//Channel Component displays selection of channels for viewing selection

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Channels(props){

    const {serverData, createNewChannel, deleteChannel} = useMyContext();
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [openAlert, setOpenAlert] = React.useState(false);
    const channels = serverData; //no longer need react state 
    //const [channels, setChannels] = React.useState(serverData); //to ensure channels update whenever we edit
    const [showModal, setShowModal] = React.useState(false); //for modal reveal and hide
    const [selectedChannel, setSelectedChannel] = React.useState(serverData.channels.allIds[0]); //for the selected list item visual
    const [channelToDelete, setChannelToDelete] = React.useState(null);
    const [serverRole, setServerRole] = React.useState(serverData.userProfile.role);
    const handleClickOpen = (id) => {
        setChannelToDelete(id)
        setOpenAlert(true);
        
      };
    
      const handleClose = () => {
        setOpenAlert(false);
      };
      {/*
    //using IndivChannel component because it is smoother (unsure why exactly)
    
    const IndivChannel = (props) => {
        console.log('Selected:', props.selected);
        
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
    */}
   
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
        if (itemId === selectedChannel) {
            const currentIndex = prevChannels.channels.allIds.indexOf(itemId);
            const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex + 1;
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
            deleteChannel={() => handleClickOpen(channel?.id)}
        />
        )
    })

    const addFunction = ((serverRole === "admin") ? (
    
        <IconButton edge="end" aria-label="addChannel"  onClick= {handleAddItem}>
            <AddIcon />
        </IconButton>) : null);
    
    return (
        <>
            {/* Houses the list of channels */}
            <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                
            >
                <DialogTitle>{"Delete Channel?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this channel?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>Cancel</Button>
                    <Button color="success" onClick={() => {handleClose(); deleteItem(channelToDelete);}}>Yes</Button>
                </DialogActions>
            </Dialog>


            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 360, bgcolor: 'background.paper' }}> 
                <nav>
                    <List component="nav">
                        
                        <ListItem
                            secondaryAction={
                                addFunction
                            }
                            disablePadding
                        >
                        {/* Channel Header*/}
                            <ListItemButton onClick={handleCollapseClick} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
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