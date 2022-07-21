// import * as React from 'react';
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SettingsApplicationsTwoTone } from '@mui/icons-material';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { fail } from 'assert';
 //34234234

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(); 
// http://localhost:8081/api/login https://www.mecallapi.com/api/login
// https://herokussru.herokuapp.com//api/loginNew/loginNewV1
//https://herokussru.herokuapp.com/api/login
async function loginUser(credentials) {
  return fetch('https://herokussru.herokuapp.com/api/loginNew/loginNewV1',{ //https://herokussru.herokuapp.com/api/login // https://www.mecallapi.com/api/login
    method: 'POST',
    headers : { 
      'Content-Type': 'application/json',
      //'Accept': 'application/json'
     },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json()) 
}
export default function Signin() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit  = async e => {
    e.preventDefault();
    const res = await loginUser({
      username,
      password
    });
    console.log('---->',res)
    console.log('---->2',res.data)
    console.log('---->3',res.data.username)
    if('accessToken' in res) {
      swal("Success", res.message, "success", {
       // showConfirmButton:false,
       // buttons: false,
       buttons: {
        cancel: { text: 'Cancel' },
        confirm: false,
      },
        timer: 20000
      })
      .then((value) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('data', JSON.stringify(res.data))
        window.location.href= "/profile";
      });
      //const buttons: boolean =  buttons as boolean;
    } else {
      swal("Failed", res.message, "error");
    }
  }

//  //old function from Mui
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
    
//   };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange ={e => setUserName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={ e => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}