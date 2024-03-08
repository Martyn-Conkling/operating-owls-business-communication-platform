import { useState } from "react";
import { Box, Grid, Avatar, Typography,  Button } from "@mui/material";
import profile from "../../../data/profile";
import FormControlLabel from "@mui/material/FormControlLabel";
// Create user profile Settings
// Profile Image - replaceable
// Username - edit, save
// email - locked
// password - change password option
// Appearance
// - Light/Dark mode
export default function AccountSettings() {
  // Edit function
  const [editing, setEditing] = useState(false);
  
  const editProfile = () => {
    setEditing(true);
    console.log('Editing')
  }

  return (
    <Box
      sx={{
        width: "calc(100vw - 12.5vw)",
        backgroundColor: "primary.contrastText",
        color: "primary.light",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          margin: "auto",
          p: 3,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Grid item >
          <Avatar
            sx={{
              width: "4rem",
              height: "4rem",
            }}
          />
        </Grid>
        <Grid item >
          <Typography variant="h5">Nickname</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={editProfile}>Edit Profile</Button>
        </Grid>
        {/* Grid for Items inside the main grid */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100",
            margin: "2rem auto",
            padding: "1rem 0.5rem",
            backgroundColor: "primary.light",
            color: "primary.contrastText",
          }}
        >
          <Grid item xs={10}>
            <Typography variant="h6">USERNAME</Typography>
            <Typography variant="p">Username here</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">EMAIL</Typography>
            <Typography variant="p">email@email.com</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
