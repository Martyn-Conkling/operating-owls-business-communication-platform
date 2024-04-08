/*
    This component is responsible for displaying the user's profile picture, username, and email.
    It also contains a menu that allows the user to navigate to the user settings page, switch their status, and logout.
    The profile component is setup to work with props to display information to the user.

    Currently, the changes only happen locally and are not persistent.
*/

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

import { useNavigate } from 'react-router-dom';

export default function ProfileComponent({ username, email, online, pfp }) {
    const [profile, setProfile] = useState({
        username: username,
        email: email,
        online: online,
        pfp: pfp
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const navigate = useNavigate();

    //getting rid of this to use props instead of profile.js data.
    // useEffect(() => {
    //     setProfile(profileData[0]);
    // }, []);

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  //this changes the status of the user.
  const handleSwitchStatusClick = () => {
    handleClose();
    setProfile({
        ...profile,
        online: !profile.online
    });
  }

  //this navigates to the user settings page.
  const handleSettingsClick = () => {
    handleClose();
    navigate('/user-settings-page');
    };

    return (
        <div className="profile--component">
            { profile && (
                <>
                    <section className="name--section">
                        <h1 className="username">{profile.username}</h1>
                        <h2 className="email">{profile.email}</h2>
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
                                {/*all menu options after the avatar button is clicked*/}
                                <MenuItem onClick={handleClose}>
                                    <AccountCircleIcon className="menu--icon" />
                                    Profile
                                    </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleSwitchStatusClick}>
                                    <CircleRoundedIcon className="menu--icon" />
                                    Switch Status
                                    </MenuItem>
                                <MenuItem onClick={handleSettingsClick}>
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
