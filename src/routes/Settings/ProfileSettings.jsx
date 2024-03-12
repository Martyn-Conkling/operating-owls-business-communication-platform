import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

export default function ProfileSettings() {
  // Edit NickName
  // Edit
  return (
    <Box
      sx={{
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <Card sx={{ width: "70%", height: "fit-content", p: 3 }}>
        <Typography variant="h4">Profile</Typography>
        <Box
          sx={{
            bgcolor: grey[900],
            color: "rgba(255,255,255,0.9)",
            borderRadius: "0.5rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.5rem 0",
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Avatar />
              <Typography variant="h6">DisplayName</Typography>
            </Box>
            <Button variant="contained">Set Status</Button>
          </CardContent>
          <CardContent>
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
                <IconButton sx={{ color: "white" }}>
                  <EditIcon sx={{ width: "1rem" }} />
                </IconButton>
              </CardActions>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone
            </Typography>
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
                <IconButton sx={{ color: "white" }}>
                  <EditIcon sx={{ width: "1rem" }} />
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
