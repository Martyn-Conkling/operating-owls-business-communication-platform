import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
//import channelData from '../../routes/ServerComponent/startingData.json'
import flatChannelData from '../../routes/ServerComponent/flatStartingData.json'
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
    console.log(searchValue);
    const selectedChannelData = flatChannelData.channels.byId[props.selectedChannel];
    const selectedMessages = selectedChannelData?.messageIds.map(id => flatChannelData.messages?.byId[id]);
    
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
    };

    const handleSearchClose = ()=> {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl) && searchValue !== '';


    const searchResults = filteredData.map(message => (
        <ListItem key = {message.messageId}>
            <ListItemButton>
                
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

    console.log(filteredData)

    React.useEffect(()=> {
        {/*
        const selectedChannelID = selectedChannel;
        const selectedChannelData = dataStore.find(channel => channel.channelID === selectedChannelID);
        if (selectedChannelData) {
         setMessagesArray([...selectedChannelData["last50MessagesArray"]]);
        }
        //displays no messages if no channels exist
        if(dataStore.length == 0){
            setMessagesArray([]);
        }
    */}
    }, [searchValue])

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
                            type="search"
                            variant="standard"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
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
                        <ProfileComponent />
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
                }}
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
