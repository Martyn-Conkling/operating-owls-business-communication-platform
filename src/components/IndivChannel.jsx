import * as React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TagIcon from '@mui/icons-material/Tag';
import PropTypes from 'prop-types';

IndivChannel.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

export default function IndivChannel(props){
    
   
    
    
    return (
        <>
            <ListItemButton 
                sx={{ pl: 4 }} 
                {...props}
                
            >
                <ListItemIcon>
                    <TagIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.name}`} />
            </ListItemButton>

        </>
    )
}