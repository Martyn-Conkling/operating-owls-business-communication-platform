import { useState } from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
export default function AccountSettings() {
  // Edit function
  const [editing, setEditing] = useState(false);

  const editProfile = () => {
    setEditing(true);
    console.log("Editing");
  };

  return (
    <Box
      sx={{
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        color: grey[900],
      }}
    >
      <Card sx={{ width: "70%", height: "fit-content", p: 3, bgcolor: grey[500] }}>
        <Typography variant="h4">My Account</Typography>
        <hr></hr>
        <Typography variant="h6">Password and Authentication</Typography>
        <Box>
          <Button variant="contained">Change Password</Button>
          <Box>
            <Typography>Two-Factor Authentication</Typography>
            <Button variant="contained">Add authenticator app</Button>
          </Box>
        </Box>
        <Box>
          <Button variant="contained">Disable Account</Button>
          <Button variant="contained">Delete Account</Button>
        </Box>
      </Card>
    </Box>
  );
}
