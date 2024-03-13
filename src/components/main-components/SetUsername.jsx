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

// import { white, purple } from '@mui/material/colors';


export default function SetUsername() {

    const theme = createTheme();

    const [username, setUsername] = useState('');

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
            <Grid container spacing={-1} sx={{}}>
                <Grid item xs={6} sx={{overflow: "hidden", height: "300px", width: "85vw", padding:5,
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
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        margin="normal"
                        required
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                </Grid>
            </Grid>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }
    