import React from 'react';
import axios from 'axios'
//import { FormControl } from '@material-ui/core';
import {Container, Button, Grid, TextField }from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
//import SaveIcon from '@material-ui/icons/Save';
import {UserContext} from '../users/userContext'
import MyStyles from '../styles'
import  { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

const NewPost = () => {
  const user = React.useContext(UserContext)
  //console.log(user.id)
  
    //const [userId, SetUserId] = React.useState(null)
    const [titleState, SetTitle] = React.useState(null)
    const [descriptionState, SetDescription] = React.useState(null)
    const [created, SetCreated] = React.useState(null)
    const [errorForm, SetErrorForm] = React.useState(null)
    //const [loaded, SetLoaded] = React.useState(null)

const createPost = async (event) => {
  const cookies = new Cookies();

  var newPostStore = {
    user_id: user.id,
    uuid: cookies.get("Go_session"),
    title: titleState,
    content: descriptionState
  }

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',   
    }
  }
  event.preventDefault();
console.log(newPostStore)
 // console.log("fields control: ", validFields())
  
  if (validFields()) {
    console.log("Correct fields")
    axiosConfig["withCredentials"] = true
     await axios.post(`http://localhost:2000/posts/newPost/`, newPostStore, axiosConfig)
     .then(response =>{
      // console.log("all response" , response)
       console.log("Response status", response.status)
       SetCreated(true)
      // SetLoaded(true)
     })
     .catch(err => console.log(err))
  } else {
  console.log("Some field empty")
}
  }
     


const validFields = () => {
  if (titleState !== null && descriptionState !== null ) {
   // console.log("Not null fields")
    if ( titleState.length > 0 && titleState.length <51 && 
      descriptionState.length > 0 && descriptionState.length <266 ) {
        //console.log("Not null length fields")
        return true
      }
  }
  SetErrorForm(true) 
  console.log("Null fields")
  return false

}

if (created) {
  return <Redirect to="/posts"></Redirect> 
}
    return (
    <Container style={MyStyles.newPostStyle} maxWidth="sm" >
        <Grid container justify="center">

          <form id="newPost">
            <h2>Title</h2>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            type="text"
            name="title"
            autoComplete="title"
            autoFocus
           onChange={(e) => SetTitle(e.target.value)}
          />
            <h2>Descripcion</h2>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="description"
            type="text"
            id="description"
            autoComplete="description"
            onChange={(e) => SetDescription (e.target.value)}
          />

            <Grid item md={12} >
              <Button color="primary" variant="outlined" onClick={createPost}>
                <DoneOutlineIcon/>  Submit
              </Button>
              <br/>
              <br/>
            </Grid>  
            {errorForm === true ? <p>Fields Cannot be empty and Title cannot has length higher than 50 nor description 
              cannot has length higher than 255</p> : "" }
               
    </form>
    
    </Grid>
  </Container>
    )
}
export default NewPost