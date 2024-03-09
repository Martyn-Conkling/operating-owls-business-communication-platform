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
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function MessageComponent(props) {

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
    <Paper
      className="message-box"
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
            <Avatar sx={{ width: 38, height: 38 }} variant="rounded" alt={props.displayName} src="/static/images/avatar/1.jpg"/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Stack 
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{madWidth: 800}}>
                  <Typography
                    noWrap  
                    style={{color: "#270157", fontSize: "1.3rem", fontFamily:"Inter-SemiBold"}} 
                    className="display--name">
                    {props.displayName}
                  </Typography>
                  <Typography
                    noWrap
                    className="display--time"
                    style={{color: "#808080", fontSize: "1.0rem", fontFamily:"Inter"}} >
                      {props.time}
                  </Typography>
            </Stack>
            <Stack style={{color: "#000000" ,fontSize: "0.75rem", fontFamily: "Inter"}}>
                <Typography>
                {props.messageContent} 
                </Typography>
                <br />
                <br />
                <Typography>
                {props.sameUserContent}
                </Typography>
            </Stack>
            </Grid>
          </Grid>
          <Grid item>
          <IconButton 
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
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
