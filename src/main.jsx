import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MyProvider } from "./DataContext.jsx";
import Root from "./routes/Root.jsx";
import AlejandroTestPage from "./routes/AlejandroTestPage.jsx";
import AshtonTestPage from "./routes/AshtonTestPage.jsx";
import JaskiratTestPage from "./routes/JaskiratTestPage.jsx";
import MartynsTestPage from "./routes/martyns-files/MartynsTestPage.jsx";
import MilesTestPage from "./routes/MilesTestPage.jsx";
import ChristianTestPage from "./routes/ChristianTestPage.jsx";
import ElizabethTestPage from "./routes/ElizabethTestPage.jsx";
import CarlTestPage from "./routes/CarlTestPage.jsx";
import EmilyTestPage from "./routes/EmilyTestPage.jsx";
import ServerComponent from "./routes/ServerComponent/ServerComponent.jsx";
// Settings
import SettingsPage from "./routes/SettingsPage.jsx";
import AccountSettings from "./routes/Settings/AccountSettings.jsx";
import ProfileSettings from "./routes/Settings/ProfileSettings.jsx";

// import ErrorPage from "./error-page";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "alejandro-test-page",
    element: <AlejandroTestPage></AlejandroTestPage>,
  },
  {
    path: "ashton-test-page",
    element: <AshtonTestPage></AshtonTestPage>,
  },

  {
    path: "jaskirat-test-page",
    element: <JaskiratTestPage></JaskiratTestPage>,
  },
  {
    path: "martyns-test-page",
    element: <MartynsTestPage></MartynsTestPage>,
  },
  {
    path: "miles-test-page",
    element: <MilesTestPage></MilesTestPage>,
  },
  {
    path: "christian-test-page",
    element: <ChristianTestPage></ChristianTestPage>,
  },
  {
    path: "elizabeth-test-page",
    element: <ElizabethTestPage></ElizabethTestPage>,
  },
  {
    path: "carl-test-page",
    element: <CarlTestPage></CarlTestPage>,
  },
  {
    path: "emily-test-page",
    element: <EmilyTestPage></EmilyTestPage>,
  },
  {
    path: "ServerComponent",
    element: <ServerComponent></ServerComponent>,
  },
  {
    path: "user-settings-page",
    element: <SettingsPage></SettingsPage>,
  },
  {
    path: "profile-settings",
    element: <ProfileSettings></ProfileSettings>,
  },
  {
    path: "account-settings",
    element: <AccountSettings></AccountSettings>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <MyProvider>
      <RouterProvider router={router} />

    </MyProvider>
     
    </ThemeProvider>
  </React.StrictMode>
);
