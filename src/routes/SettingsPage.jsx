import { useState } from "react";
import {
  Box,
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import settings from "../components/main-components/Settings/usersettings"
import AccountSettings from "../components/main-components/Settings/AccountSettings";
import ProfileSettings from "../components/main-components/Settings/ProfileSettings";

export default function SettingsPage() {
  const [openSettings, setOpenSettings] = useState("Account");
  
  // Set event Target for List Items
  const currentSetting = (event) => {
    if(!event.target.classList.contains('MuiListItemButton-root')) {
      // nOTHING
    }
    setOpenSettings(event.target.innerHTML);
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
          width: "200px"
        }}
      >
        <ListSubheader>User Settings</ListSubheader>
        <ListItemButton onClick={currentSetting}>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton onClick={currentSetting}>
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
