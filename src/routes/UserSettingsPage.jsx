import Box from "@mui/material/Box";
import Navigation from "../components/main-components/Navigation";
import UserProfile from "../components/main-components/UserProfile";
import ProfileComponent from "../components/main-components/ProfileComponent";
export default function UserSettingsPage() {
  return (
    <Box 
        sx={{
            display: "flex",
        }}
    >
      <Navigation />
      <UserProfile/>
    </Box>
  );
}
