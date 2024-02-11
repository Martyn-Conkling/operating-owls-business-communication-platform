// THEME
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  AppBar,
  Container,
  Typography,
} from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { purple, grey } from "@mui/material/colors";
import { Outlet, Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[50],
      dark: purple[900],
      contrastText: grey[900],
    },
  },
});

export default function MilesTestPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <h1>Welcome to Miles' test page</h1> */}

        <AppBar
          position="sticky"
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
              <Box
                src="businessLogo.png"
                alt="Placeholder Business Logo"
                component="img"
                sx={{
                  width: "2.5rem",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  justifyContent: "space-between",
                }}
              >
                <Link to={`alejandro-test-page`}>
                  <NotificationsActiveOutlinedIcon fontSize="large" />
                  <Typography variant="subtitle2">New</Typography>
                </Link>
                <Link to={`alejandro-test-page`}>
                  <QuestionAnswerOutlinedIcon fontSize="large" />
                  <Typography variant="subtitle2">DMs</Typography>
                </Link>
                <Link to={`alejandro-test-page`}>
                  <TextSnippetOutlinedIcon fontSize="large" />
                  <Typography variant="subtitle2">Files</Typography>
                </Link>
              </Box>
              <Box>
                <SettingsOutlinedIcon
                  fontSize="large"
                  sx={{ color: "primary.dark" }}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
