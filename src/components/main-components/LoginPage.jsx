import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BusinessIcon from "./BusinessIcon";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../test/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  snapshotEqual,
} from "firebase/firestore";
import { db } from "../test/firebaseConfig";
import { user } from "@nextui-org/react";
import styled from "@emotion/styled";

export default function ChristianTestPage() {
  const cssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D9D9D9",
        light: "#D9D9D9",
      },
      secondary: {
        main: "#270157",
      },
    },
    typography: {
      fontFamily: ["Arial", "sans-serif"].join(","),
    },
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailNoValue, setEmailNoValue] = useState(false);
  const [emailNoValueMessage, setEmailNoValueMessage] = useState();
  const [passwordHasValue, setPasswordHasValue] = useState(false);
  const [passwordValueMessage, setPasswordValueMessage] = useState();
  const [invalidLogIn, setInvalidLogin] = useState(false);
  const [invalidLogInMessage, setInvalidLoginMessage] = useState("");

  function setErrorMessageBlank() {
    setEmailNoValue(false);
    setEmailNoValueMessage("");
    setPasswordHasValue(false);
    setPasswordValueMessage("");
    setInvalidLogin(false);
    setInvalidLoginMessage("");
  }

  let navigate = useNavigate();
  async function routeChange(pathLink, username) {
    let path = pathLink;
    navigate(path, {
      state: { email: email, username: username, isLoggedIn: true },
    });
  }

  async function getUsername() {
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef);
    let userInfo = userSnap.data();
    console.log(userInfo);
    // setUsername(userInfo.username)
    return userInfo.username;
  }

  async function LogInButtonClicked() {
    setErrorMessageBlank();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      const username = await getUsername();
      routeChange(`/ServerComponent`, username);
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      if (errorCode === "auth/missing-email") {
        setEmailNoValue(true);
        setEmailNoValueMessage("Email input needed");
      }
      if (errorCode === "auth/missing-password") {
        setPasswordHasValue(false);
        setPasswordValueMessage("Password input needed");
      }
      if (errorCode === "auth/invalid-credential") {
        setInvalidLogin(true);
        setInvalidLoginMessage("Invalid Email or Password");
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0.5rem",
            width: "min(100%, 500px)",
            bgcolor: "#1E1E1E",
            p: 5,
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "light gray" }}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome Back
          </Typography>

          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField
              variant="filled"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailNoValue || invalidLogIn}
              helperText={emailNoValueMessage || invalidLogInMessage}
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "0.5rem",
              }}
            />
            <TextField
              variant="filled"
              color="secondary"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passwordHasValue || invalidLogIn}
              helperText={passwordValueMessage || invalidLogInMessage}
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "0.5rem",
              }}
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" sx={{ color: "primary.main" }} />
              }
              label="Remember me"
            />
            <Button
              onClick={LogInButtonClicked}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" className="link">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className="link" to="/carl-test-page">
                  {"Need an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
