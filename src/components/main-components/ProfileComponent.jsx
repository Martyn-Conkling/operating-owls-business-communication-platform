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

export default function ProfileComponent() {
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        setProfile(profileData[0]);
    }, []);

    return (
        <div className="profile--component">
            { profile && (
                <>
                    <section className="name--section">
                        <h1 className="username">{profile.username}</h1>
                        <h2 className="nickname">{profile.nickname}</h2>
                    </section>
                    <section className="icon--section">
                        <Badge
                            overlap="circular"
                            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                            badgeContent={profile.online ? <CircleIcon className="online" sx={{width: 12, height: 12}} /> : <CircleIcon className="offline" sx={{width: 12, height: 12}} />}
                        >
                            <Avatar src={profile.pfp} />
                        </Badge>
                    </section>
                </>
            )}
        </div>
    )
}
