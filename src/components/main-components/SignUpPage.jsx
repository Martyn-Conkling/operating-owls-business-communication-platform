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
import { auth } from '../test/firebaseConfig'; 
import { Grid } from '@mui/material';
import BusinessIcon from './BusinessIcon';


export default function SignUpPage() {

    const theme = createTheme();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState();


    function validate(){
        console.log(null)
    }

    return (
    <ThemeProvider theme={theme}>
        <Container component="main">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Avatar sx={{ m: 1, bgcolor: 'black', ml: 33, mb: 3}}>
                        <BusinessIcon />
                    </Avatar>
                    <Typography variant="h5">
                    Welcome
                    </Typography>
                    <Typography variant="h7" sx={{
                        textDecoration: 'underline',
                        paddingTop: '3px'
                    }}>
                    Lets get you set up
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
                        <TextField
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            margin="normal"
                            required
                            fullWidth
                            name="confirm password"
                            label="Confirm Password"
                            type="password"
                            id="confirm password"
                            autoComplete="current-password"
                            // error={!validate}
                            // helperText={error}
                        />
                        <Button
                            onClick={validate}
                            type="button"
                            fullWidth
                            color='secondary'
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: 3, }}
                        >
                            Sign Up
                        </Button>
                        <p>Already have an account? <Link color={'secondary'} href={`christian-test-page`}>Login</Link></p>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>Img</p>
                </Grid>
            </Grid>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }