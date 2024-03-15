// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';
// import { Grid } from '@mui/material';
// import BusinessIcon from './BusinessIcon';
// import { auth } from '../test/firebaseConfig';
// import { createUserWithEmailAndPassword } from "firebase/auth";

// // import { white, purple } from '@mui/material/colors';


// export default function SignUpPage() {

//     //MUI
//     const theme = createTheme();


//     //Sign Up Inputs
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     //Password not matching authentication
//     const [passwordsMatch, setPasswordsMatch] = useState(false);
//     const [passwordsMatchErrorMessage, setPasswordsMatchErrorMessage] = useState('');

//     //Email valid authentication
//     const [emailValid, setEmailValid] = useState(false);
//     const [emailValidMessage, setEmailValidMessage] = useState(false);

//     //Email already in use authentication
//     const [EmailUsed, setEmailUsed] = useState(false);
//     const [EmailUsedMessage, setEmailUsedMessage] = useState('');
    
//     //Check if password is weak
//     const [passwordStrong, setPasswordStrong] = useState(false);
//     const [passwordStrongMessage, setPasswordStrongMessage] = useState('');

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };
    
//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     function setErrorMessageBlank(){
//         setPasswordsMatch(false)
//         setPasswordsMatchErrorMessage('');
//         setEmailValid(false)
//         setEmailValidMessage('');
//         setEmailUsed(false)
//         setEmailUsedMessage('')
//         setPasswordStrong(false)
//         setPasswordStrongMessage('')
//     }

//     function validate() {
//         setErrorMessageBlank()
//         //set all error messages back to blank
//         if (password === confirmPassword) {
//             setPasswordsMatch(false);

//             //Firebase Sign Up

//             createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//             // Signed up 
//                 const user = userCredential.user;
//                 console.log(`logged in ${user}`)
//             // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 // const errorMessage = error.message;
//                 console.log(errorCode)
//                 if (errorCode === "auth/invalid-email") {
//                     setEmailValid(true)
//                     setEmailValidMessage("Invalid Email")
//                 }
//                 if (errorCode === "auth/email-already-in-use") {
//                     setEmailUsed(true)
//                     setEmailUsedMessage("Email already in use")
//                 }
//                 if (errorCode === 'auth/weak-password') {
//                     setPasswordStrong(true)
//                     setPasswordStrongMessage('Password to weak')
//                 }
//             // ..

//             });
//         } else {
//             setPasswordsMatchErrorMessage("Password do not match")
//             setPasswordsMatch(true);
//         }
//     }

//     return (
//     <ThemeProvider theme={theme}>
//         <Container component="main" sx={{}}>
//         <CssBaseline />
//         <Box
//             sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: 25,
            
//             }}
//         >
//             <Grid container spacing={-1} sx={{}}>
//                 <Grid item xs={6} sx={{bgcolor: '#323232', borderRadius: '10%', overflow: "hidden", height: "650px", width: "85vw"}}>
//                     <Avatar sx={{ m: "3%", bgcolor: 'black', ml: "47.5%", mb: "2%"}}>
//                         <BusinessIcon />
//                     </Avatar>
//                     <Typography variant="h5" sx={{ml:"43%", mb: 1.5, color:"#ffffff"}}>
//                         Welcome
//                     </Typography>
//                     <Typography variant="h7" sx={{
//                         textDecoration: 'underline', ml: "39.5%",color:"#ffffff"}}>
//                     Lets get you set up
//                     </Typography>
//                     <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
//                         <TextField
//                             sx={{width: "60%", ml:"22%", mr:"5%",}}
//                             onChange={e => setEmail(e.target.value)}
//                             value={email}
//                             margin="normal"
//                             required
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                             error={emailValid || EmailUsed}
//                             helperText={emailValidMessage || EmailUsedMessage}
//                         />
//                         <TextField
//                             sx={{width: "60%",
//                             ml:"22%",
//                             mr:"5%"
//                         }}                         
//                             onChange={e => setUsername(e.target.value)}
//                             value={username}
//                             margin="normal"
//                             required
//                             id="username"
//                             label="Username"
//                             name="username"
//                             autoComplete="username"
//                             autoFocus
//                         />
//                         <TextField
//                             sx={{width: "60%",
//                             ml:"22%",
//                             mr:"5%"
//                         }}                        
//                             onChange={handlePasswordChange}
//                             value={password}
//                             margin="normal"
//                             required
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             error={passwordStrong}
//                             helperText={passwordStrongMessage}
//                         />
//                         <TextField
//                             sx={{width: "60%",
//                             ml:"22%",
//                             mr:"5%"
//                         }}                        
//                             onChange={handleConfirmPasswordChange}
//                             value={confirmPassword}
//                             margin="normal"
//                             required
//                             name="confirm password"
//                             label="Confirm Password"
//                             type="password"
//                             id="confirm password"
//                             error={passwordsMatch}
//                             helperText={passwordsMatchErrorMessage}
//                         />
//                         <Button                   
//                             onClick={validate}
//                             type="button"
//                             color='secondary'
//                             variant="contained"
//                             sx={{ mt: 3, mb: 3, borderRadius: 3, width: "60%", ml:"22%"}}
//                         >
//                             Sign Up
//                         </Button>
//                         <br/>
//                         <Typography variant="h7" sx={{ml:"29%", color:"#ffff"}}>Already have an account? <Link color={'secondary'} href={`christian-test-page`}>Login</Link></Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//         </Container>
//     </ThemeProvider>
//     );
//     }