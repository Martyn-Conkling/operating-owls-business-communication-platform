import React, { useState, useEffect } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import profileData from "../../data/profile"

export default function ProfileComponent() {
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        setProfile(profileData[0]);
    }, []);

    //this commented code may be useful in the future...
    /*
    async function getProfile() {
        try {
            const response = await fetch("");
            const data = await response.json();
            setProfile(data[0]);
        }
        catch (error) {
            console.error("Error fetching profile:", error);
        }
    }
    */

    return (
        <div className="profile--component">
            { profile && (
                <>
                    <p>Username: {profile.username}</p>
                    <p>Nickname: {profile.nickname}</p>
                    <CircleIcon />
                    <AccountCircleIcon />
                </>
            )}
        </div>
    )
}
