import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Grid } from '@mui/material';
import BusinessIcon from './BusinessIcon';
import { auth } from '../test/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, addDoc, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../test/firebaseConfig"


export default function SignUpPage() {

    //MUI
    const theme = createTheme();

    //Sign Up Inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //Password not matching authentication
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordsMatchErrorMessage, setPasswordsMatchErrorMessage] = useState('');
    //Email valid authentication
    const [emailValid, setEmailInvalid] = useState(false);
    const [emailValidMessage, setEmailInvalidMessage] = useState(false);
    //Email already in use authentication
    const [EmailUsed, setEmailUsed] = useState(false);
    const [EmailUsedMessage, setEmailUsedMessage] = useState('');
    //Check if password is weak
    const [passwordStrong, setPasswordStrong] = useState(false);
    const [passwordStrongMessage, setPasswordStrongMessage] = useState('');
    //useState for username
    const [username, setUsername] = useState('');
    //useState if sign up is complete ternary
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    //get user uid from firebase into a state
    const [UID, setUID] = useState();



    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    function setErrorMessageBlank(){
        setPasswordsMatch(false)
        setPasswordsMatchErrorMessage('');
        setEmailInvalid(false)
        setEmailInvalidMessage('');
        setEmailUsed(false)
        setEmailUsedMessage('')
        setPasswordStrong(false)
        setPasswordStrongMessage('')
    }
    useEffect(()=>{
        console.log(UID)
    },[UID])

    function SetUsername() {

        const theme = createTheme();
    
        let navigate = useNavigate();
        async function routeChange(pathLink){
            let path = pathLink;
            navigate(path,{state:{email:email,username:username,isLoggedIn:true}});}
    
        const usernameChange = (e) => {
            setUsername(e.target.value)
        };
    

        const StoreToFirestore = async () => {
            try{
                await setDoc(doc(db, "users", email), {
                email: email,
                name: "not available at the moment",
                password: password,
                userID: UID,
                username: username
                })
        } catch (err) {
            console.error(err);
        }}

    const usernameSubmit = async () => {
        try {StoreToFirestore() } catch (err) {console.error(err)}
        console.log(`User email ${email} username is set to ${username}`)
        routeChange(`/ServerComponent`,)
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
                overflow: 'hidden'
                }}
            >
                <Grid container spacing={-1} sx={{marginTop: "5%"}}>
                    <Grid item xs={6} sx={{overflow: "hidden", height: "400px", width: "85vw", padding:5,
                                            borderRadius: 10, background: "rgba( 255, 255, 255, 0.55 )", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", border: "2px solid rgba( 0, 0, 0, 0.18 )"}}>
                        <Avatar sx={{ m: "3%", bgcolor: 'black', ml: "47%", mb: "2%", mt: "5%"}}>
                            <BusinessIcon />
                        </Avatar>
                        <Typography variant="h4" sx={{ml:"43%", mb: 1.5, color:"#black"}}>
                            Next
                        </Typography>
                        <Typography variant="h7" sx={{
                            textDecoration: 'underline', ml: "34%",color:"black"}}>
                        Lets set you username
                        </Typography>
                        <TextField
                            sx={{width: "60%",
                            ml:"22%",
                            mr:"5%"
                        }}                         
                            onChange={usernameChange}
                            value={username}
                            margin="normal"
                            required
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <Button                   
                            onClick={usernameSubmit}
                            type="button"
                            color='secondary'
                            variant="contained"
                            sx={{ mt: 3, mb: 3, borderRadius: 3, width: "60%", ml:"22%"}}
                        >Sign Up</Button>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </ThemeProvider>
        );
        }

    function validate() {
        setErrorMessageBlank()
        //set all error messages back to blank
        if (password === confirmPassword) {
            setPasswordsMatch(false);

            //Firebase Sign Up
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up
                setSignUpSuccess(true)
                var userUID = (userCredential.user.uid)
                setUID(userUID)
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode)
                if (errorCode === "auth/invalid-email") {
                    setEmailInvalid(true)
                    setEmailInvalidMessage("Invalid Email")
                }
                if (errorCode === "auth/email-already-in-use") {
                    setEmailUsed(true)
                    setEmailUsedMessage("Email already in use")
                }
                if (errorCode === 'auth/weak-password') {
                    setPasswordStrong(true)
                    setPasswordStrongMessage('Password to weak')
                }
            // ..

            });
        } else {
            setPasswordsMatchErrorMessage("Password do not match")
            setPasswordsMatch(true);
        }
    }

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" sx={{ml:"32vw"}}>
        <CssBaseline />
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: "15vh"
            }}
        >
            <Grid container spacing={-1} sx={{}}>
                {signUpSuccess === false ?
                    <Grid item xs={6.5} sx={{borderRadius: '10%', overflow: "hidden", height: "62vh", width: "85vw",
                                            background: "rgba( 255, 255, 255, 0.6 )", boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(5px)", border: "1px solid rgba( 255, 255, 255, 0.18 )"}}>
                        <Avatar sx={{ m: "3%", bgcolor: 'black', ml: "47.5%", mb: "2%", mt: 9}}>
                            <BusinessIcon />
                        </Avatar>
                        <Typography variant="h5" sx={{ml:"43%", mb: 1.5, color:"black"}}>
                            Welcome
                        </Typography>
                        <Typography variant="h7" sx={{
                            textDecoration: 'underline', ml: "39.5%",color:"black"}}>
                        Lets get you set up
                        </Typography>
                        <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
                            <TextField
                                sx={{width: "60%", ml:"22%", mr:"5%",}}
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={emailValid || EmailUsed}
                                helperText={emailValidMessage || EmailUsedMessage}
                            />
                            <TextField
                                sx={{width: "60%",
                                ml:"22%",
                                mr:"5%"
                            }}                        
                                onChange={handlePasswordChange}
                                value={password}
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                error={passwordStrong}
                                helperText={passwordStrongMessage}
                            />
                            <TextField
                                sx={{width: "60%",
                                ml:"22%",
                                mr:"5%"
                            }}                        
                                onChange={handleConfirmPasswordChange}
                                value={confirmPassword}
                                margin="normal"
                                required
                                name="confirm password"
                                label="Confirm Password"
                                type="password"
                                id="confirm password"
                                error={passwordsMatch}
                                helperText={passwordsMatchErrorMessage}
                            />
                            <Button                   
                                onClick={validate}
                                type="button"
                                color='secondary'
                                variant="contained"
                                sx={{ mt: 3, mb: 3, borderRadius: 3, width: "60%", ml:"22%"}}
                            >
                                Next
                            </Button>
                            <br/>
                            <Typography variant="h7" sx={{ml:"29%", color:"black"}}>Already have an account? <Link color={'secondary'} href={`christian-test-page`}>Login</Link></Typography>
                        </Box>
                    </Grid>
                : <SetUsername/> }
            </Grid>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }