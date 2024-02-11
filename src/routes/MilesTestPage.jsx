// THEME
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
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

import Navigation from "../components/main-components/Navigation";

export default function MilesTestPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        
      </ThemeProvider>
    </>
  );
}
