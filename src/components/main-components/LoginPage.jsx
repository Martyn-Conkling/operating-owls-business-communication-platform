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
import styled from '@emotion/styled';

export default function ChristianTestPage() {
const cssTextField = styled(TextField) ({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});
const theme = createTheme({
    palette: {
    primary: {
        main: '#D9D9D9',
        light: '#D9D9D9',
    },
    secondary: {
        main: '#270157',
    },
    },
    typography: {
    fontFamily: [
        'Arial',
        'sans-serif',
    ].join(','),
    },
});

const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [emailNoValue, setEmailNoValue] = useState(false);
const [emailNoValueMessage, setEmailNoValueMessage] = useState();
const [passwordHasValue, setPasswordHasValue] = useState(false);
const [passwordValueMessage, setPasswordValueMessage] = useState();
const [invalidLogIn, setInvalidLogin] = useState(false);
const [invalidLogInMessage, setInvalidLoginMessage] = useState('');

function setErrorMessageBlank(){
    setEmailNoValue(false);
    setEmailNoValueMessage('');
    setPasswordHasValue(false);
    setPasswordValueMessage('');
    setInvalidLogin(false);
    setInvalidLoginMessage('');
}

let navigate = useNavigate();
async function routeChange(pathLink, username){
    let path = pathLink;
    navigate(path,{state:{email:email,username:username,isLoggedIn:true}});}

async function getUsername(){
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef)
    let userInfo = userSnap.data()
    console.log(userInfo)
    // setUsername(userInfo.username)
    return userInfo.username;
}


async function LogInButtonClicked() {
    setErrorMessageBlank();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        const username = await getUsername();
        routeChange(`/ServerComponent`, username);
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/missing-email") {
            setEmailNoValue(true);
            setEmailNoValueMessage('Email input needed');
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
    <Container component="main" sx={{}}>
    <CssBaseline />
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mr: -20,
        ml: 18,
        }}
    >
        <Grid container spacing={-25} sx={{mt:10}}>
        <Grid item xs={8} sx={{borderRadius: '13%', overflow: "hidden", height: "75vh", width: "85vw", background: "#2a2c30", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(5px)", border: "1px solid rgba( 255, 255, 255, 0.18)"}}>
            <Avatar sx={{ m: "3%", bgcolor: 'black', ml: "47%", mb: "2%", mt: "5%" }}>
            <BusinessIcon />
            </Avatar>
            <Typography variant="h5" sx={{ml: "37%", mv: 1.5, color: "#e8e8e8"}}>
                Welcome Back 
            </Typography>
            <Box component="form" noValidate autoComplete="off" color= 'primary' sx={{mt: 1}}>
                <TextField
                    variant='standard'
                    sx={{borderRadius: '12%', width: "60%", ml: "22%", mr: "5%",}}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    margin='normal'
                    required
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    error={emailNoValue}
                    helperText={emailNoValueMessage}
                />
                <TextField
                variant='standard'
                sx={{width: "60%", ml: "22%", mr: "5%"}}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                margin='normal'
                required
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                error={passwordHasValue}
                helperText={passwordValueMessage}
                />
                <Button
                onClick={LogInButtonClicked}
                type='button'
                fullWidth
                color='secondary'
                variant='contained'
                sx={{ mt: 3, mb: 3, borderRadius: 3, width: "60%", ml: "22%"}}
                >
                Log In
                </Button>
                <br/>
                <Typography variant="h7" sx={{ml: "29%", color: "white"}}>Don't have an account?
                <Link color={'secondary'} href={`carl-test-page`}>
                    Sign Up
                </Link>
                </Typography>
            </Box>
            </Grid>
        </Grid>

        </Box>
    </Container>
</ThemeProvider>
);
}