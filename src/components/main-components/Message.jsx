import '../../css/Message.css';
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
import { Typography } from "@mui/material";

export default function Message(props) {

    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
      console.log("Open")
      if (open !== event.currentTarget) {
        setAnchorEl(event.currentTarget)
      }
    }

    function handleClose() {
      console.log("Close")
      setAnchorEl(null);
    }

    return (
        <div>
        <List className="message-box">
            <Divider style={{color: "#7B7B7B",fontSize: "1rem", fontFamily: "Inter"}}>{props.time} </Divider>
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
                            sx={{ width: 250, maxWidth: '100%'}} 
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            >
                              <MenuItem>
                                  <ListItemIcon>
                                    <EditNoteIcon fontSize="medium"/>
                                  </ListItemIcon>
                                  <ListItemText><Typography style={{fontFamily: "Inter", color: "#1E1E1E"}}>Edit Message</Typography></ListItemText>
                              </MenuItem>
                              <MenuItem >
                                  <ListItemIcon>  
                                    <DeleteIcon fontSize="medium"/> 
                                  </ListItemIcon>
                                  <ListItemText><Typography style={{fontFamily: "Inter"}}>Delete Message</Typography></ListItemText>
                              </MenuItem>
                              <MenuItem>
                                  <ListItemIcon>
                                    <ReplyIcon fontSize="medium" />
                                  </ListItemIcon>
                                  <ListItemText><Typography style={{fontFamily: "Inter"}}>Reply</Typography></ListItemText>
                              </MenuItem>
                        </Menu>
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar variant="rounded" alt={props.displayName} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    disableTypography={true}
                    className="first-and-lastname"
                    primary={<Typography style={{color: "#270157", fontSize: "1.33rem", fontFamily:"Inter-SemiBold"}} className="display--name">{props.displayName}</Typography>}
                    secondary={<Typography style={{color: "#000000" ,fontSize: "1rem", fontFamily: "Inter"}}>
                      <React.Fragment>{props.messageContent}</React.Fragment>
                      </Typography>}
                />
            </ListItem>
        </List>
        </div>
    );
}
