import React from 'react';
import {Container, Button, Grid, TextField, Box }from '@material-ui/core';
import {Base, styles, pStyle } from './Base';
//import Cookies from 'universal-cookie';
//import { v4 as uuidv4 } from 'uuid';
import  { Redirect } from 'react-router-dom'
import axios from 'axios'
import {
  Link
} from "react-router-dom";

/*
const cookieName = 'LoginCookie' 
const cookieVal = uuidv4()*/

export default class SignIn extends Base{

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      signedIn : false
    }
  }

    async submit (event) {

    var userLogin = {
      email: this.state.email,
      password: this.state.password
    }

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',   
      }
    }

       event.preventDefault();
       axiosConfig["withCredentials"] = true
       await axios.post(`http://localhost:2000/users/sign-in/`, userLogin, axiosConfig)
       .then(response => {
           console.log(response)
           console.log(response.data)
           console.log(response.data.status)
           if (response.data.status === 200) {
             this.setState({signedIn : true})
             window.location.reload()
           }
           console.log(response.data.cookie)
           this.clearFieldLogin()
           
       }).catch(err => console.log(err))

      }

      clearFieldLogin(){
        document.getElementById("formLogin").reset()
      }
      


    render() {

        if (this.state.signedIn) {        
          return <Redirect to="/"></Redirect>        
        } else {
          
        return (
          
         <Container >
              <Grid container justify="center">
                  <p>{this.state.error}</p>
              <Box >
              <form style={pStyle} id="formLogin">
              <h2>Login</h2>
              <div>{this.state.error}</div>
                  <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => this.syncEmail(e)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => this.syncPassword(e)}
              />
  
              <Grid item md={12} >
              <Button variant="contained" color="primary" disabled={this.state.canSubmit} 
              style={styles.buttonTop} onClick={this.submit} >
                  Sign Up!
              </Button>
              <br/>
              <br/>
              <span>Haven't you an account yet?</span>

                <Button color="inherit" component={Link} to="/sign-up" >register now!</Button>
              </Grid>
               
          </form>
          </Box>
          </Grid>
          
          </Container>
     
          );
        }
      }

}
/* 
manuel@nolan.it 
manuel92
*/