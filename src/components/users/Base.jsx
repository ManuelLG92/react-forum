import React from 'react';
//import Axios from 'axios';

//import { blueA400 } from '@material-ui/core/colors';
//import {Container, Button, Grid, TextField, Box }from '@material-ui/core';

export class Base extends React.Component {
        
        constructor(props) {
        super(props);
        this.state = { //estado inicial
            canSubmit: false,
            name: '',
            last_name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: '',
            nameSubmit: false,
            lastNameSubmit: false,
            emailSubmit: false,
            passwordSubmit: false,
            confirmPasswordSubmit: false
        };
    }
    

    validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regexp.test(email);
        return valid
      }

      validatePass (password) {
        let valid;
        if (password.length < 8 || password.length > 24  ) {
            valid = false
            return valid

        }  else {
            valid = true
            return valid
        }

      }

      syncEmail(event) {
        
          let value = event.target.value;

          if (this.validateEmail(value) === true) {
            this.setState({
                email: value,
                emailSubmit: true
            })
            this.submitSignUp()
          }
          else {
            this.setState({
                emailSubmit: false
            })
            this.submitSignUp()
          }
          this.submitSignUp()
      }



      syncPassword(event) {
        let value = event.target.value;

        this.setState({
            password: value
        })


      if (this.validatePass(value) === true) {
            this.setState({
                passwordSubmit: true
            })
            this.submitSignUp()

          } else {
            this.setState({
                passwordSubmit: false
            })
            this.submitSignUp()
          }

        
    }

    syncName(event) {
        this.submitSignUp()
        let nameForm = event.target.value 
        if( nameForm.length > 0 || nameForm.length < 31) {
            this.setState({
                nameSubmit: true,
                name: nameForm
            })
            this.submitSignUp()
        } else {
            this.setState({
                nameSubmit: false
            }) 
            this.submitSignUp()
        }
    }

    syncLastName(event) {
        this.submitSignUp()
        let lastNameForm = event.target.value 
        if( lastNameForm.length > 0 || lastNameForm.length < 31) {
            this.setState({
                lastNameSubmit: true,
                last_name: lastNameForm
            })
            this.submitSignUp()
        } else {
            this.setState({
                lastNameSubmit: false
            })
            this.submitSignUp()
        }
    }

    syncConfirmpassword(event) {
        let confirmPasswordForm = event.target.value 
        console.log("password: ", this.state.password)
        console.log("confirmation password: ",confirmPasswordForm)
        this.setState({
            passwordConfirmation: confirmPasswordForm
        })
       var samePassword = this.passwordComparision(this.state.password,confirmPasswordForm)
        console.log("comparision", samePassword)

        if (samePassword){
             this.setState({
                confirmPasswordSubmit: true
            })
            this.submitSignUp()
        } else {
            this.setState({
                confirmPasswordSubmit: false
            })
            this.submitSignUp()
        }
        this.submitSignUp()
    }


    passwordComparision (password, confirmPass) {
        var samePassword = password.localeCompare(confirmPass); 
        console.log("comparision password: ", samePassword)
       if (samePassword === 0) {
        this.setState({
            confirmPasswordSubmit: true
        })
        return true
       } else {
        this.setState({
            confirmPasswordSubmit: false
        })
        return false
       }
    }



    submitSignUp () {
        if (this.state.nameSubmit
            && this.state.lastNameSubmit  && this.state.passwordSubmit
            && this.state.emailSubmit
            ) {
                    if (this.state.password === this.state.passwordConfirmation) {
                    this.setState({
                    canSubmit: true
                }) 
                    }
 
        } else {
            this.setState({
                canSubmit: false
            }) 
        }    
    }

}


export const styles = {
    buttonTop: {
        marginTop: '1em',
        "&:hover, &:focus": {
            textDecoration: 'none',
            color: 'white',
          }
    },
    underlineStyle: {
        borderColor: 'blue',
    },
    floatingLabelFocusStyle: {
        color: 'blue',
    },
    leftSpace: {
        marginLeft: '1em'
    },
    margin: {
        margin: '3em'
    }
}
export const pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    padding: '2em',
    border: '1px solid black',
    marginTop: '3em',
    width: '25em', 
    borderRadius: '5px',
    background: 'white'
  };
