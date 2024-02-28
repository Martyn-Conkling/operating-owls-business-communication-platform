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
import LightBulbImage from './LightBulb';
import BusinessIcon from './BusinessIcon';

export default function SignUpPage() {

    const theme = createTheme();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState();


    function validate(){
        return null
    }

    return (
    <ThemeProvider theme={theme}>
        <Container component="main">
        <CssBaseline />
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 25,
            }}
        >
            <Grid container spacing={-1} sx={{marginLeft: 100}}>
                <Grid item xs={6}>
                    <Avatar sx={{ m: 1, bgcolor: 'black', ml: 33, mb: 3}}>
                        <BusinessIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ml:30}}>
                    Welcome
                    </Typography>
                    <Typography variant="h7" sx={{
                        textDecoration: 'underline',
                        paddingTop: '3px',
                        ml: 28
                    }}>
                    Lets get you set up
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
                        <TextField
                            sx={{width: 420,
                                ml:10
                                
                            }}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            margin="normal"
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            sx={{width: 420,
                                ml:10
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
                        <TextField
                            sx={{width: 420,
                                ml:10
                            }}                        
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            sx={{width: 420,
                                ml:10
                            }}                        
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            margin="normal"
                            required
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
                            color='secondary'
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: 3, width: 420, ml:10}}
                        >
                            Sign Up
                        </Button>
                        <br/>
                        <Typography variant="h7" sx={{ml:23}}>Already have an account? <Link color={'secondary'} href={`christian-test-page`}>Login</Link></Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <LightBulbImage/>
                </Grid>
            </Grid>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }