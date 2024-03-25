import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessIcon from './BusinessIcon';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../test/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDoc, doc, snapshotEqual } from 'firebase/firestore';
import { db } from '../test/firebaseConfig';
import { user } from '@nextui-org/react';

export default function ChristianTestPage() {
const theme = createTheme();

const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [emailNoValue, setEmailNoValue] = useState(false);
const [emailNoValueMessage, setEmailNoValueMessage] = useState();
const [passwordHasValue, setPasswordHasValue] = useState(false);
const [passwordValueMessage, setPasswordValueMessage] = useState();
const [invalidLogIn, setInvalidLogin] = useState(false);
const [invalidLogInMessage, setInvalidLoginMessage] = useState('');
const [username, setUsername] = useState();

function setErrorMessageBlank(){
    setEmailNoValue(false);
    setEmailNoValueMessage('');
    setPasswordHasValue(false);
    setPasswordValueMessage('');
    setInvalidLogin(false);
    setInvalidLoginMessage('');
}

let navigate = useNavigate();
async function routeChange(pathLink){
    let path = pathLink;
    navigate(path,{state:{email:email,username:username,isLoggedIn:true}});}

async function getUsername(){
    let userInfo = undefined
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef)
    userInfo = userSnap.data()
    setUsername(userInfo.username)
}

useEffect(()=>{
    console.log(username)
},[username])


function LogInButtonClicked() {
    setErrorMessageBlank()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log(user)
        getUsername()
        routeChange(`/ServerComponent`)

    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        if (errorCode === "auth/missing-email") {
            setEmailNoValue(true)
            setEmailNoValueMessage('Email input needed')
        }
        if (errorCode === "auth/missing-password") {
            setPasswordHasValue(false)
            setPasswordValueMessage("Password input needed")
        }
        if (errorCode === "auth/invalid-credential") {
            setInvalidLogin(true);
            setInvalidLoginMessage("Invalid Email or Password")
        }
    });
}

return (
<ThemeProvider theme={theme}>
    <Container component="main" maxWidth="s">
    <CssBaseline />
    <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        <Avatar sx={{ m: 2, bgcolor: 'light gray' }}>
        <BusinessIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Welcome Back
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
        <TextField
            onChange={e => setEmail(e.target.value)}
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
        />
        <TextField
            onChange={e => setPassword(e.target.value)}
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
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
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
            <Link href="#" variant="body2">
                Forgot password?
            </Link>
            </Grid>
            <Grid item>
            <Link href="#" variant="body2">
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