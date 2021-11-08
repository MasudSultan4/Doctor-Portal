import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { logIn, user, isLoading, authError, singInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        logIn(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle(location, history)
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <Typography>---------------------------</Typography>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
            <img src="https://i.ibb.co/St6mpb6/login.png" width="100%" alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Login;