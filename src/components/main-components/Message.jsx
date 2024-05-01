import '../../css/Message.css';
import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon"
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MessageThread from "./MessageThread";
import { useMyContext } from '../../DataContext';
export default function MessageComponent(props) {
  const {serverData} = useMyContext();
  // logic for Editing Message
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(props.messageContent)
  const [user, setUser] = React.useState(serverData.userProfile)
  const toggleIsEditing = () => setIsEditing((b) => !b);

  const finishEditing = () => {
    updateDate();
    setIsEditing(false);
  }

  // logic for Replying to Message
  const [isReplying, setIsReplying] = React.useState(false);
  const toggleIsReplying = () => setIsReplying((b) => !b);

  // dynamically applying className styles
  const ref = React.useRef();

  const [anchorEl, setAnchorEl] = React.useState(null)
  
  function handleClick(event) {
    if (open !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  const [sentTime, setSentTime] = React.useState(props.time)

  function updateDate() {
    var currentTime = new Date();
    setSentTime(currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const messageMenu = (<IconButton 
    edge="end" 
    aria-owns={anchorEl ? "simple-menu" : undefined}
    aria-haspopup="true" 
    onClick={handleClick} 
    onMouseLeave={handleClose}>
      <MoreVertIcon />
        <Menu 
          sx={{ width: 250, maxWidth: '100%'}} 
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          MenuListProps={{ onMouseLeave: handleClose }}>
            
              {((user.role =="admin") || (user.username === props.userId)) ? (
                <>
              <MenuItem>
              <ListItemIcon>
                <EditNoteIcon fontSize="medium"/>
              </ListItemIcon>
              <ListItemText>
                <Typography 
                  style={{fontFamily: "Inter", color: "#1E1E1E"}}
                  onClick={toggleIsEditing}>Edit Message
                </Typography>
              </ListItemText>
            </MenuItem>
            <MenuItem >
              <ListItemIcon>  
                <DeleteIcon fontSize="medium"/> 
              </ListItemIcon>
              <ListItemText>
                <Typography 
                  style={{fontFamily: "Inter"}}
                  onClick={() => props.removeMessage(props.messageIndex)}> Delete Message
                </Typography>
              </ListItemText>
            </MenuItem>
            </>) : null }
            <MenuItem>
              <ListItemIcon>
                <ReplyIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Typography 
                  style={{fontFamily: "Inter"}}
                  onClick={toggleIsReplying}> Reply
                </Typography>
              </ListItemText>
            </MenuItem>
        </Menu>
  </IconButton> )

  return (
      <Grid 
        container spacing={2}
        className="message-box"
        minWidth={500}
        sx={{
        margin: 'auto',
        flexGrow: 1,
        paddingRight: 4,
        paddingBottom: 1
        }}>
        <Grid 
          item xs={0.5} 
          container minWidth={50}>
          {props.displayUserInfo && 
            <Avatar 
              sx={{ width: 38, height: 38 }} 
              variant="rounded" alt={props.displayName} 
              src="/static/images/avatar/1.jpg"/>}
        </Grid>
        <Grid 
          item xs={12} 
          sm container>
        <Grid 
          item xs container 
          direction="column" 
          spacing={2}>
        <Grid 
          item xs> 
          {props.displayUserInfo && (
            <Stack 
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              sx={{madWidth: 800}}> 
                <Typography
                  noWrap  
                  style={{color: "#270157", fontSize: "1.1rem", fontFamily:"Inter-SemiBold"}} 
                  className="display--name">
                  {props.displayName}
                </Typography>
                <Typography
                  noWrap
                  className="display--time"
                  style={{color: "#808080", fontSize: "0.75rem", fontFamily:"Inter"}} >
                  {sentTime}
                </Typography> 
            </Stack> )}
            <Stack 
              style={{color: "#000000" ,fontSize: "0.75rem", fontFamily: "Inter"}}>
              {isEditing ?  (
                <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  value={value}
                  className={ref.current?.className}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Typography ref={ref}/>
                  <Button 
                    sx={{fontFamily: "Inter-SemiBold", color: "#1E1E1E"}} 
                    size="small" onClick={finishEditing}>Done
                  </Button>
                </div>) : 
                (<Typography>
                {value} 
                </Typography> )}
            </Stack>
        </Grid>
        <Grid item>
          {isReplying && (
            <div>
              <MessageThread />
            </div>
          )}
        </Grid>
      </Grid>
      <Grid item>
        {(user.role !== "read-only") ? messageMenu : null}
      </Grid>
    </Grid>
  </Grid>
  );
}