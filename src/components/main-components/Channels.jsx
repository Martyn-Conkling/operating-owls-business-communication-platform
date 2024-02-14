import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import IndivChannel from '../IndivChannel';
import AddIcon from '@mui/icons-material/Add';
import channelData from '../../data/channelData'

export default function Channels(){
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [channels, setChannels] = React.useState(channelData);

    const [selectedIndex, setSelectedIndex] = React.useState(1); //for the selected list item

    const handleClick = () => {
        setOpen(!open);
    };


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    
    const channelElements = channels.map(channel => (
        <IndivChannel 
            key={channel.id}
            name={channel.name}
        />
    ))

    return (
        <>
            <h1>Welcome to Ashton's Test page</h1>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> 
                <nav>
                    <List component="nav">

                        <ListItemButton onClick={handleClick} sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <ListItemButton sx={{ width:'5%',  maxWidth: 10, display:'flex', justifyContent: 'center' }} onClick={(e) => { e.stopPropagation(); }}>
                                <ListItemIcon sx={{display:'flex', justifyContent: 'center' }}>
                                        <AddIcon />
                                </ListItemIcon>
                            </ListItemButton>

                            {/*
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            */}
                            <ListItemText primary="Channels" sx={{pl:1, }}  primaryTypographyProps={{ fontWeight: 'bold' }}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                            
                            
                        </ListItemButton>
    
                        <Collapse in={open} unmountOnExit>
                            <List component="div">
                                {channelElements}
                            </List>
                        </Collapse>
                       
                    </List>
                </nav>
            </Box>

        </>
    )
}