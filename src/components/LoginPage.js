/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Avatar, CssBaseline, Grid, Paper, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';



export default function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  console.log(localStorage.getItem('isLoggedIn')  );
  if(localStorage.getItem('isLoggedIn')){
    navigate("/search", {from: "Search"});
  }
  else{
    navigate("/login", {from: "LoginPage"});
  }
  const changePage = () =>{
    //localStorage.getItem(isLoggedIn) ? navigate("/search", {from: "Search"}) : navigate("/login", {from: "LoginPage"});
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    if(localStorage.getItem('isLoggedIn')){
      navigate("/search", {from: "Search"});
    }
    else{
      navigate("/login", {from: "LoginPage"});
    }
  }
  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://sg.cdnki.com/vai-tro-cua-tri-thuc-voi-su-phat-trien-cua-the-he-tre---aHR0cHM6Ly9pLnZkb2Mudm4vZGF0YS9pbWFnZS8yMDIwLzA2LzMwL25naGktbHVhbi14YS1ob2ktdmUtdHJpLXRodWMtbGEtc3VjLW1hbmgtMS5qcGc=.webp)',
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
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                required
                
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={changePage}
              >
               Login 
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
            </Box>
          </Box>
        </Grid>
      </Grid>
      </div>
 

  );
}