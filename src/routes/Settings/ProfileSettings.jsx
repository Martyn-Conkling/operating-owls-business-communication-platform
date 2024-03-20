import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { DoNotDisturbOn, DarkMode, Circle } from "@mui/icons-material";

export default function ProfileSettings() {
  const [status, setStatus] = useState("");
  const [editProfile, setProfile] = useState({
    displayName: "",
    pfp: "",
    email: "",
    phone: "",
    bio: "",
  });

  const statusChange = (event) => {
    setStatus(event.target.value);
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
        sx={{ width: "50%", height: "fit-content", p: 3, bgcolor: grey[500] }}
      >
        <Typography variant="h4">Profile</Typography>
        <Box
          sx={{
            bgcolor: grey[200],
            borderRadius: "0.5rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0 0 0",
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Avatar sx={{ border: "2px solid black" }} />
              <Typography variant="h6">DisplayName</Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={status}
                onChange={statusChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Set Status</em>
                </MenuItem>
                <MenuItem value={"online"}>
                  <Circle />
                  Online
                </MenuItem>
                <MenuItem value={"away"}>
                  <DarkMode />
                  Away
                </MenuItem>
                <MenuItem value={"do not disturb"}>
                  <DoNotDisturbOn />
                  Do not disturb
                </MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardContent>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                Contact Information
              </Typography>
              <CardActions>
                <IconButton>
                  <EditIcon sx={{ width: "1rem", color: grey[900] }} />
                </IconButton>
              </CardActions>
            </Box>
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              <Typography variant="body2">Email</Typography>
              <Typography variant="body2">email@email.com</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              <Typography variant="body2">Phone</Typography>
              <Typography variant="body2">+1 234-567-8910</Typography>
            </Box>
          </CardContent>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography variant="h6">Bio</Typography>
              <CardActions>
                <IconButton>
                  <EditIcon sx={{ width: "1rem", color: grey[900] }} />
                </IconButton>
              </CardActions>
            </Box>
            <Typography>HELLO THIS IS A BIO.</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
