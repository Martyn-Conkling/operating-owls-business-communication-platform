import {
  Toolbar,
  AppBar,
  Container,
  Typography,
  Stack,
  IconButton,
  Badge
} from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BusinessIcon from "./BusinessIcon";
import { Link } from 'react-router-dom';

/* 
  Onclick for each menu item for routing to different pages - needs refactor

  Extra Feature Settings: Create Settings Menu
    - User should be able to add / change user profile
    - User should be able to change their nickname
    - User should be able to go from light mode to dark mode
*/

export default function Navigation() {

  return (
    <AppBar
      position="static"
      sx={{
        width: "6rem",
        bgcolor: "primary.main",
        position: "relative",
        boxShadow: 0,
        borderRight: 1,
        borderColor: "primary.light",
      }}
    >
      <Container disableGutters>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "96.50vh",
            my: 2,
          }}
        >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <BusinessIcon />
          </IconButton>
          <Stack direction="column" spacing={2} width={"100%"}>
            <Link to={`/alejandro-test-page`}
            >
              <Badge badgeContent={5} color="success">
                <NotificationsActiveOutlinedIcon fontSize="large" />
              </Badge>
              <Typography variant="subtitle2">New</Typography>
            </Link>
            <Link to={`/ashton-test-page`}
              sx={{
                color: "primary.dark",
                display: "block",
                borderRadius: "0",
              }}
            >
              <QuestionAnswerOutlinedIcon fontSize="large" />
              <Typography variant="subtitle2">DMs</Typography>
            </Link>
            <Link to={`/jaskirat-test-page`}
              sx={{
                color: "primary.dark",
                display: "block",
                borderRadius: "0",
              }}
            >
              <TextSnippetOutlinedIcon fontSize="large" />
              <Typography variant="subtitle2">Files</Typography>
            </Link>
          </Stack>
          <Link to={`/martyns-test-page`}
            sx={{
              color: "primary.dark",
              display: "block",
              borderRadius: "0",
            }}
          >
            <SettingsOutlinedIcon
              fontSize="large"
              sx={{ color: "primary.dark" }}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
