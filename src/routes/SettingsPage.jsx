import { useState, useEffect } from "react";
import {
  Box,
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AccountSettings from "./Settings/AccountSettings";
import ProfileSettings from "./Settings/ProfileSettings";
import { NavLink } from "react-router-dom";

export default function SettingsPage() {
  const [openSettings, setOpenSettings] = useState("Profile");

  const changeSettingsPage = (event) => {
    const settingsChoice = event.target.innerHTML;
    setOpenSettings(settingsChoice);
  }
  
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "background.paper",
      }}
    >
      <List
        component="nav"
        sx={{
          width: "200px",
        }}
      >
        <ListSubheader>User Settings</ListSubheader>
        <ListItemButton
          component={NavLink}
          to={`/profile-settings`}
          onChange={changeSettingsPage}
        >
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton 
          component={NavLink}
          to={`/account-settings`}
          onChange={changeSettingsPage}
        >
          <ListItemText primary="Account" />
        </ListItemButton>
        <ListSubheader>App Settings</ListSubheader>
        <ListItemButton>
          <ListItemText primary="Appearance" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Accessibility" />
        </ListItemButton>
      </List>
      <Box>
        {openSettings === "Account" && <AccountSettings />}
        {openSettings === "Profile" && <ProfileSettings />}
      </Box>
    </Box>
  );
}
