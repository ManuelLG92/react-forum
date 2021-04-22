import React from 'react';
import axios from 'axios'
import {UserContext} from '../users/userContext'
import {  TextField, Container, Button } from '@material-ui/core';
import {useLocation, Redirect } from "react-router-dom";
import MyStyles from '../styles'
import Cookies from 'universal-cookie';


const EditPost = (props) => {
    const location = useLocation();
    const currentTitle = location.state.title
    const currentContent = location.state.content
    const id = location.state.post_id
    const userId = location.state.user_id
    const user = React.useContext(UserContext)
    //const {postId, title, description} = useParams()
    const [titleEdit, SetTitle] = React.useState(currentTitle)
    const [contentEdit, SetContent] = React.useState(currentContent)
    const [changed, SetChanged] = React.useState(false)
    const [success, SetSuccess] = React.useState(false)
    const [load, SetLoad] = React.useState(false)
 //console.log(useParams())
 const cookies = new Cookies();
 //console.log(userId)
 //console.log(user.id) 

 const SendEditForm = async (event) => {
    //manageData()
   
    event.preventDefault();

      var postData = {
        user_id: userId, 
        uuid: cookies.get("Go_session"),
        title: titleEdit,
        content: contentEdit
      } 

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',   
        }
      }
       await axios.put(`http://localhost:2000/post/edit/${id}/`, postData, axiosConfig)
       .then(response =>{
       //  console.log("all response" , response)
        // console.log("Response status", response.status)
         if (response.status === 202) {
             SetSuccess(true)} 
       })
       .catch(error => console.log(error))
    }
    
    React.useEffect(() => {
        SetLoad(true) 
    }, [] )

    const TitleHandler = (e) => { 
        SetTitle(e.target.value) 
        SetChanged(true) }
    
    const ContentHandler = (e) => { 
        SetContent(e.target.value) 
        SetChanged(true) }



    if (!load) {
        return (
            <div>Loading</div>
        )
    } else {
        if (success) {
            return (
            <Redirect to='/posts'></Redirect>
            )
        }
     return (
         <div>
         {userId === user.id ? 
        <Container style={MyStyles.newPostStyle} maxWidth="sm">
            <form>
         <div style={MyStyles.textField}>
             <TextField required id="standard-required" label="Title" type="text"
             defaultValue={currentTitle} fullWidth autoComplete="title"
             variant="outlined" onChange={(e) => TitleHandler(e)}/>         
         </div>
         <div style={MyStyles.textField} >
             <TextField required aria-label="minimum height" fullWidth
             rows={4} multiline defaultValue={currentContent}
             variant="outlined"  onChange={(e) => ContentHandler(e) }/>
         </div>
            
         <div style={MyStyles.textField}>
             <Button color="primary" variant="outlined" 
             disabled={!changed} fullWidth  onClick={SendEditForm} >
                 Save
             </Button>
         </div>
         </form>
         </Container> : <Redirect to="/posts"></Redirect>}
         </div>
     ) }
         

}
export default EditPost