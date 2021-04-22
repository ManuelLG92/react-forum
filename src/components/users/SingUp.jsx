import React from 'react';
import {Container, Button, Grid, TextField, Box }from '@material-ui/core';
import {Base, styles, pStyle } from './Base';
import axios from 'axios'
import {
  Link
} from "react-router-dom";



export default class SignUp extends Base {

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
      }
    

  async submit () {
    var userRegistration = {
        name: this.state.name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
    }

    let axiosConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      /*
      console.log("name: ", this.state.nameSubmit)
      console.log("LastName: ", this.state.lastNameSubmit )
      console.log("password: ", this.state.passwordSubmit)
      console.log("Email: ", this.state.emailSubmit)
      console.log("Password confirm: ", this.state.confirmPasswordSubmit) 
      console.log("Email: ", this.state.email)   
      console.log(userRegistration)*/

      if (this.state.nameSubmit
        && this.state.lastNameSubmit  && this.state.passwordSubmit
        && this.state.emailSubmit && this.state.passwordSubmit) {
    console.log(userRegistration)
    await axios.post(`http://localhost:2000/users/sign-up/`, userRegistration, axiosConfig)
    
    .then(response => {
        console.log(response)
        console.log(response.data)
        document.getElementById("formRegister").reset()
        window.location.reload()
       // this.clearFields()
    }).catch(err => console.log(err))}

    else {
      console.log("Error en la validacion")
    }

  }

 /* clearFields(){
    document.getElementById("formRegister").reset()
  }*/
  


    render() {
      return (

       <Container >
           
            <Grid container justify="center">
            <p>{this.state.error}</p>
            <Box>
            <form style={pStyle} id="formRegister" >
            <h2>Register</h2>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Type your name.."
              type="text"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => this.syncName(e)}
              
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Type your last name or surname.."
              type="text"
              name="last_name"
              autoComplete="last_name"
              onInput={(e) => this.syncLastName(e)}
            />

                <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Type your email address"
              type="email"
              name="email"
              autoComplete="email"
              onChange={(e) => this.syncEmail(e)}
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Type your password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.syncPassword(e)}
            />

              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              label="Password confirm."
              type="password"
              id="passwordConfirmation"
              autoComplete="current-password"
              onChange={(e) => this.syncConfirmpassword(e)}
            />

            <Grid item md={12} >
            <Button variant="contained" color="primary" 
            style={styles.buttonTop} onClick={() => this.submit()}>
                Sign Up!
            </Button>
            <br/>
            <br/>
             <span> Already have an account? </span>
            <Button color="inherit" component={Link} to="/sign-in" >Sign-in!</Button>
            </Grid>
             
        </form>
        </Box>
        </Grid>
        
        </Container>
   
        );
    }
}