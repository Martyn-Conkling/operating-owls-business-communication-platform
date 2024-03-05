import "../MessageComponent/Message.css"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon"
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Message(props) {

    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
      console.log("Ran")
      if (open !== event.currentTarget) {
        setAnchorEl(event.currentTarget)
      }
    }

    function handleClose() {
      console.log("Closed")
      setAnchorEl(null);
    }

    return (
        <div>
        <List className="message-box">
            <Divider className="date-and-time">{props.time + ", " + props.date} </Divider>
            <ListItem alignItems="flex-start"
                secondaryAction={
                    <IconButton 
                      edge="end" 
                      aria-owns={anchorEl ? "simple-menu" : undefined}
                      aria-haspopup="true" 
                      onClick={handleClick} 
                      onMouseLeave={handleClose}
                      >
                        <MoreVertIcon />
                          <Menu 
                            sx={{ width: 250, maxWidth: '100%' }} 
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            >
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon>
                                    <EditNoteIcon fontSize="medium"/>
                                  </ListItemIcon>
                                  <ListItemText>Edit Message</ListItemText>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon>  
                                    <DeleteIcon fontSize="medium"/> 
                                  </ListItemIcon>
                                  <ListItemText>Delete Message</ListItemText>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon>
                                    <ReplyIcon fontSize="medium" />
                                  </ListItemIcon>
                                  <ListItemText>Reply</ListItemText>
                              </MenuItem>
                        </Menu>
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar alt={props.firstName} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={props.firstName + " " + props.lastName}
                    secondary={
                        <React.Fragment>{props.messageContent}</React.Fragment>
                    }
                />
            </ListItem>
        </List>
        </div>
    );
}
