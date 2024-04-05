import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
//import channelData from '../../routes/ServerComponent/startingData.json'
import flatChannelData from '../../flatStartingData.json'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import ClearIcon from '@mui/icons-material/Clear';
import ProfileComponent from './ProfileComponent';
import '../../css/Search.css'

export default function Search(props){
    const[searchValue, setSearchValue] = React.useState('');
    const [forcePopover, setForcePopover] = React.useState(false);
    const textFieldRef = React.useRef(null);
    console.log(searchValue);
    const selectedChannelData = flatChannelData.channels.byId[props.selectedChannel];
    const selectedMessages = selectedChannelData?.messageIds.map(id => flatChannelData.messages?.[id]);
    
    const filteredDataContent = selectedChannelData?.messageIds ? selectedMessages.filter(item =>
        item.content.toLowerCase().includes(searchValue.toLowerCase())
    ) : [];
    const filteredDataName = selectedChannelData?.messageIds ? selectedMessages.filter(item =>
        item.username.toLowerCase().includes(searchValue.toLowerCase())
    ) : [];

    const comboFilteredData = [...filteredDataContent, ...filteredDataName]
    
    const uniqueMessages = new Map();
    comboFilteredData.forEach(item => {
        uniqueMessages.set(item.messageId, item)
    })

    const filteredData = Array.from(uniqueMessages.values())
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleSearchOpen = (event) => {
        setAnchorEl(event.currentTarget);
        //setForcePopover(true);
        console.log("reopening this popover")
    };

    React.useEffect(() => {
        if(searchValue){
            setForcePopover(true);
        }
    }, [searchValue, ]);


    const handleSearchClose = ()=> {
        setAnchorEl(null);
        console.log("now it should work")
        
        setForcePopover(false);
        console.log("haha still doing it")
        
    };

    const open = (Boolean(anchorEl) && searchValue !== '') && forcePopover;


    const searchResults = filteredData.map(message => (
        <ListItem key = {message.messageId}>
            <ListItemButton onClick={ () => {handleSearchClose();  props.scrollToMessage(message.messageId); null.focus();}}>     
                <ListItemText primary={message.username} secondary={message.content} />
            </ListItemButton>
        </ListItem>
    ));
    const emptyResults =  (
            <ListItem key = {0}>
                <ListItemButton>
                    <ListItemText primary="No results found" />
                </ListItemButton>
            </ListItem>
        
    )

    console.log("This is the setting of the popover: ", forcePopover)

    return(
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" sx={{width: '100%'}}>
                    <Toolbar className="Top--Bar">
                        <div className="Title">
                            {/* Icon Button */}
                            <IconButton className="Top--Bar"
                                size="large"
                                edge="start"
                                >
                                    <CatchingPokemonIcon />
                            </IconButton>
                            {/* Application Title */}
                            <Typography variant= "h6" component="div">
                                Operating Owls
                            </Typography>
                        </div>
                        {/* Search Text Field */}
                        <TextField
                            id="standard-search"
                            label="Search field"
                            inputRef={textFieldRef}
                            type="search"
                            variant="standard"
                            value={searchValue}

                            onChange={(e) => {setSearchValue(e.target.value); }}
                            sx={{
                                width:'50%',
                                'input[type="search"]::-webkit-search-cancel-button': {
                                    display: 'none',
                                },
                            }}
                            onFocus={handleSearchOpen}
                            
                            color="info"
                            InputProps={{
                                endAdornment: searchValue ? (

                                    <IconButton
                                        onClick={() => setSearchValue('')}
                                        edge="end" 
                                        size="medium"
                                        tabIndex={-1}
                                        >
                                            <ClearIcon />
                                    </IconButton>): null
                            }}
                            clearButton={false}
                        />
                        {/* Profile Component */}
                        {/* the profile component is setup to work with props */}
                        <ProfileComponent username={props.username} nickname={props.username} online={true} pfp="https://picsum.photos/200" />

                    </Toolbar>
                </AppBar>
            </Box>
            <Divider />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleSearchClose}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}Te
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  sx={{marginTop:'20px', zIndex: 1000}}
            >
                <List >
                    {filteredData.length ? searchResults : emptyResults}
                </List>
            </Popover>
        </>
    )
}
