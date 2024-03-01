import * as React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TagIcon from '@mui/icons-material/Tag';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
IndivChannel.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    deleteChannel: PropTypes.func.isRequired
};

export default function IndivChannel(props){
    
    return (
        <>
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
            

        </>
    )
}
