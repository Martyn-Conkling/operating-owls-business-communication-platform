import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TagIcon from '@mui/icons-material/Tag';

import AddIcon from '@mui/icons-material/Add';



    


export default function Channels(){
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [selectedIndex, setSelectedIndex] = React.useState(1); //for the selected list item
    const handleClick = () => {
        setOpen(!open);
    };
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
    
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
                                <ListItemButton 
                                    sx={{ pl: 4 }} 
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)} 
                                >
                                    <ListItemIcon>
                                        <TagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="announcements" />
                                </ListItemButton>

                                <ListItemButton 
                                    sx={{ pl: 4 }} 
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)} 
                                >
                                    <ListItemIcon>
                                        <TagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="general" />
                                </ListItemButton>
                                
                                <ListItemButton 
                                    sx={{ pl: 4 }} 
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListItemClick(event, 3)} 
                                >
                                    <ListItemIcon>
                                        <TagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="serious-stuff" />
                                </ListItemButton>

                                <ListItemButton 
                                    sx={{ pl: 4 }} 
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 4)} 
                                >
                                    <ListItemIcon>
                                        <TagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="memes" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                       
                    </List>
                </nav>
            </Box>

        </>
    )
}