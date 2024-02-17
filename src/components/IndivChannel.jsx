import * as React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TagIcon from '@mui/icons-material/Tag';



export default function IndivChannel(props){
    { /*
    const [open, setOpen] = React.useState(true); //for the collapsible list
    const [channels, setChannels] = React.useState(channelData);
    const [selectedIndex, setSelectedIndex] = React.useState(1); //for the selected list item
    
    */

    }
    

    
    return (
        <>
            <ListItemButton 
                sx={{ pl: 4 }} 
                //selected={selectedIndex === props.id}
                //onClick={(event) => handleListItemClick(event, props.id)} 
                
            >
                <ListItemIcon>
                    <TagIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.name}`} />
            </ListItemButton>

        </>
    )
}