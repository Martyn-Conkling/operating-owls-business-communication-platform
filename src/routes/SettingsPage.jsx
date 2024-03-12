import { useState } from "react";
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
  // Set event Target for List Items
  const currentSetting = (event) => {
    const currTarget = event.target;
    if (!currTarget.classList.contains("MuiListItemButton-root")) {
      // nOTHING
    }
    //setOpenSettings(currTarget.innerHTML);
  };

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
          onClick={currentSetting}
        >
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton 
          component={NavLink}
          to={`/account-settings`}
          onClick={currentSetting}>
          <ListItemText primary="Account" />
        </ListItemButton>
        <ListSubheader>App Settings</ListSubheader>
        <ListItemButton onClick={currentSetting}>
          <ListItemText primary="Appearance" />
        </ListItemButton>
        <ListItemButton onClick={currentSetting}>
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
