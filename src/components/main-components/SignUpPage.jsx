import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

export default function SignUpPage() {

    const theme = createTheme();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState();

    function validate(){
        if (email.length === 0) {
            setError('Email Needed')
        }
        console.log(email, username, password, confirmPassword)
    }

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
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
                />
                <Button
                    onClick={validate}
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 3, }}
                >
                    Sign Up
                </Button>
                <Link to={`christian-test-page`}><p>Already have an account? Login</p>
                </Link>
            </Box>
        </Box>
        </Container>
    </ThemeProvider>
    );
    }