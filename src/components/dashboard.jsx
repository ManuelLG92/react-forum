import React from 'react';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router
  /*,
  Switch,
  Route,
  Link*/
} from "react-router-dom";
/*import  { Redirect } from 'react-router-dom'
import Posts from './posts/apiPost'
import Logout from './users/logout'
import IndexLayout from './indexLayout'
import Container from '@material-ui/core/Container';
import SinglePost from './posts/postById'*/
import UserNavBar from './navigation/navigationAuthuser'
///import {UserContext} from './users/userContext'
/*import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Button from '@material-ui/core/Button';*/
import Routes from './routes/routes'

const Dashboard = ({auth} ) =>  {
  
// const user = React.useContext(UserContext)
 //console.log(user.id)
 //console.log(auth)
    return (
      <div>
        <Router > 
        <UserNavBar/>
        <Routes auth={auth} /> 
       </Router>   
    </div>
    )


}  
export default Dashboard; 