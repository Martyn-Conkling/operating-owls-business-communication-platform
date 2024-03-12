import { useState } from "react";
import { Box, Typography, Card, Button } from "@mui/material";

export default function AccountSettings() {
  // Edit function
  const [editing, setEditing] = useState(false);

  const editProfile = () => {
    setEditing(true);
    console.log("Editing");
  };

  return (
    <Box>
      <Typography>Account</Typography>
      <Card>
        <Typography>Password and Authentication</Typography>
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
