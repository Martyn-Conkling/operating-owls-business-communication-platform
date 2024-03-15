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
import { db } from "../test/firebaseConfig"
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";


export default function SetUsername(props) {

    const theme = createTheme();
    const [username, setUsername] = useState('');

    const email = props.email

    // setUserUID(props.userID)

    const usernameChange = (e) => {
        setUsername(e.target.value)
    };

    const usernameRef = doc(db, 'users', email)

    const usernameSubmit = async (e) => {
        await updateDoc(usernameRef, {
            username: username
        });

        console.log(`User email ${email} username is set to ${username}`)
    
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
    