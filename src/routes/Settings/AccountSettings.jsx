import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  FormControl,
  InputLabel,
  Input,
  TextField,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { grey } from "@mui/material/colors";

export default function AccountSettings() {
  // State variables to store user information
  const [username, setUsername] = useState("JohnDoe");
  const [displayName, setDisplayName] = useState("John Doe");
  const [profilePicture, setProfilePicture] = useState("profile.jpg");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  // Function to update user information
  const handleUpdateUser = () => {
    // Code to handle updating user information
    // You can send updated information to the backend here
    console.log("User information updated");
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
      <Card
        sx={{ width: "70%", height: "fit-content", p: 3, bgcolor: grey[500] }}
      >
        <Typography variant="h4">My Account</Typography>
        <hr></hr>
        <FormControl sx={{width: "100%"}} className="user-account-page">
        <img src={profilePicture} alt="Profile" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }} htmlFor="username">
              Username:
            </InputLabel>
            <TextField
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }} htmlFor="displayName">
              Display Name:
            </InputLabel>
            <TextField
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }} htmlFor="pfp">
              Profile Picture:
            </InputLabel>
            <Input
              id="pfp"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }}>Email:</InputLabel>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }}>Phone:</InputLabel>
            <TextField
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <InputLabel sx={{ position: "relative" }}>Bio:</InputLabel>
            <TextareaAutosize
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Box>
          <button onClick={handleUpdateUser}>Update</button>
        </FormControl>
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
