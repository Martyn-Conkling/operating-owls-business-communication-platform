// THEME
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

import { Button, Toolbar, colors } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

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
        <h1>Welcome to Miles' test page</h1>

        <AppBar
          position="sticky"
          bgColor="primary.main"
          sx={{
            width: "6rem",
            position: "relative",
          }}
        >
          <Container disableGutters>
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                py: 4,
              }}
            >
              <img src="vite.svg" />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
