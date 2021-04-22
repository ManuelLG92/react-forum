import React from 'react';
import axios from 'axios'
import { useParams} from "react-router-dom";
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {UserContext} from '../users/userContext'
import  { Link, Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Cookies from 'universal-cookie';
import Dialog from '@material-ui/core/Dialog';
import {DialogActions,DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import MyStyles from '../styles'
//import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

  

  const SinglePost = () => {
    const cookies = new Cookies();
    const user = React.useContext(UserContext)
    const {id} = useParams()
   const [post, Setpost] = React.useState([])
   const [load, SetLoad] = React.useState(false)
    const [deleted, SetDeleted] = React.useState(false)
  // const [submitDelete, SetSubmitDelete] = React.useState(false)
   const [open, setOpen] = React.useState(false);
 //console.log(useParams())



        React.useEffect(() => {
          const getPost =  () => {
            axios.get(`http://localhost:2000/post/${id}/`)
            .then(response => {
               // console.log(response)
                Setpost(response.data)
                SetLoad(true) 
                
                //console.log(response.data)
               // console.log(post)
             
            })
            .catch(error => console.log(error) )
           // console.log(post)
         }  
         getPost()          
      },[id]) 
      //console.log(id)

      
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      /**/
      const deletePost = () => {

        //SetLoad(false) 
       // console.log(user.id)
     //   console.log(post.user_id)
        if (user.id === post.user_id) {

          var postToDelete = {
          user_id: post.user_id, 
          uuid: cookies.get("Go_session"),
        }
        let axiosConfig = {
          headers: {
            'Content-Type': 'application/json',   
          }
        }
        axios.post(`http://localhost:2000/post/delete/${id}/`, postToDelete, axiosConfig)
        .then(response => {
          // console.log(response)
          // Setpost(response.data) 
           if (response.status === 202 ) {
            SetDeleted(true)
           }
           console.log(response)
           console.log(response.status)
          // console.log(post)
        
       })
       .catch(error => console.log(error) )

        } else {
          return (
            <Redirect to='/posts'></Redirect>
            )
        }

      }



      const uStyle = {
        height: '100%',
        marginRight: '1em'
      };
      const postStyle = {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start'
        
      } 

      const btnStyles = {
        marginTop: '2em',
        marginLeft: '75%'
      }
     // const toEdit = `/edit-post/${post.id}/${post.title}/${post.description}`
    /* */
    if (deleted) {
       return (
          /*<div></div>
         <h1>Your post has been deleted successfully!</h1>*/
         <Redirect to='/posts'></Redirect>
       )
     }

     if (!load) {
      return (
      <div >
        <h2>Loading..</h2>
      <CircularProgress />
    </div>
        )
    } else {
     return (
      <div >
               <div style={{ background: '#2E3B55', color: 'white', padding: '1em', border: '1px solid black' }}>
             <h2 >{post.title}</h2>
             <p>By: {post.user_name + " " + post.last_name} at {post.created_at} </p>
             </div>
             <Card key={post.id} style={MyStyles.newPostStyle}>               
                 <div style={uStyle}>
                 <Input type="hidden" value={post.user_id}></Input>
                 <CardHeader  title={"#" + JSON.stringify(post.id) + "  " + post.title 
                + " by user ID " + JSON.stringify(post.user_id)}
                subheader={"Created at: " + post.created_at}
                  />                          
                 </div>
             <div style={postStyle}>
                <CardHeader avatar={
                  <Avatar aria-label="post" >
                      <AccountCircleIcon fontSize="large"/>
                    
                  </Avatar>}
                  title= {post.user_name + " " + post.last_name + "\n\n" }
                  subheader= {"Country: " +  post.country} 
                  style={ { backgroundColor: "#B7CDC4",alignSelf: 'center' }} />
                <Divider />
               <CardContent  style={ { backgroundColor: "#C3D5CD"}}>
               <Typography  component="h6">
               {post.content}
          </Typography>
          {user.id === post.user_id ? 
              <div style={btnStyles}>
          <Button variant="outlined" color="primary" 
                 component={Link} to={ {
                  pathname: '/edit-post',
                  state: {
                    user_id: post.user_id,
                    post_id: post.id,
                    title: post.title,
                    content: post.content,
                  },
                     } } > Edit</Button>
          
          <Button color="primary" 
          style= {{ marginRigth: "2em" }}onClick={handleClickOpen}> Delete</Button>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure to delete this post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          If you delete this post, It will be not longer available anymore.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deletePost}>
            Yes, Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            No, cancel
          </Button>
        </DialogActions>
      </Dialog>    
         
          </div> : ""}

               </CardContent>
               <Button color="primary" > Reply </Button> 
              </div>
              
              
          
               </Card>
              
         </div>
     
     )
    }

  }
  export default SinglePost