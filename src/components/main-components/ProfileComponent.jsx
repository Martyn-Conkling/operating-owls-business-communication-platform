/*
    Links:
        - https://mui.com/material-ui/react-badge/
        - https://mui.com/material-ui/react-avatar/
*/

import React, { useState, useEffect } from 'react';

import '../../css/ProfileComponent.css'
import profileData from "../../data/profile"

import Badge from '@mui/material/Badge';
import CircleIcon from '@mui/icons-material/Circle';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function ProfileComponent() {
    const [profile, setProfile] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    useEffect(() => {
        setProfile(profileData[0]);
    }, []);

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="profile--component">
            { profile && (
                <>
                    <section className="name--section">
                        <h1 className="username">{profile.username}</h1>
                        <h2 className="nickname">{profile.nickname}</h2>
                    </section>
                    <section className="icon--section">
                        <Tooltip title="profile settings">
                            <IconButton aria-label="profile picture" size="small" onClick={handleClick}>
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    badgeContent={
                                        profile.online
                                            ? <CircleIcon className="online" sx={{ width: 14, height: 14 }} />
                                            : <CircleIcon className="offline" sx={{ width: 14, height: 14 }} />
                                    }
                                >
                                    <Avatar src={profile.pfp}
                                        alt={profile.username}
                                        sx={{ width: 32, height: 32 }}
                                    />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <AccountCircleIcon className="menu--icon" />
                                    Profile
                                    </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <CircleRoundedIcon className="menu--icon" />
                                    Switch Status
                                    </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <SettingsIcon className="menu--icon" />
                                    Settings
                                    </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Logout className="menu--icon" />
                                    Logout
                                    </MenuItem>
                            </Menu>
                    </section>
                </>
            )}
        </div>
    )
}


{/* <Badge
overlap="circular"
anchorOrigin={{vertical: "bottom", horizontal: "left"}}
size="large"
badgeContent={profile.online ? <CircleIcon className="online"/> : <CircleIcon className="offline" sx={{width: 12, height: 12}} />}
>
<Tooltip title="profile settings">
    <IconButton aria-label="profile picture" size="small">
        <Avatar src={profile.pfp} />
    </IconButton>
</Tooltip>
</Badge> */}