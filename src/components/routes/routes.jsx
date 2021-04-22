import React from 'react';
import {
    //BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  }
from "react-router-dom";
import NewPost from '../posts/newPost'
import PrivateRoute from '../privateRoutes'
import {PublicRoute} from '../privateRoutes'
import Posts from '../posts/apiPost.jsx'
import Logout from '../users/logout'
import IndexLayout from '../indexLayout'
import Container from '@material-ui/core/Container';
import SinglePost from '../posts/postById'
import SignUp from '../users/SingUp.jsx'
import SignIn from '../users/SingIn.jsx'
import EditPost from '../posts/editPost'

const Routes = ({auth}) => {
  // console.log({auth})
 // <PrivateRoute auth={auth} path="/edit-post/:postId/:title/:description" component={EditPost} exact />
    return (
        <Switch>
        <Route path="/" exact>
          <Container style={{ backgroundColor : 'white', paddingTop: '1em', paddingBottom: '1em'}} maxWidth="md">
            <div>
              <IndexLayout/>
            </div>
          </Container>
        </Route>
  
        <Route path="/posts"  exact>
          <Container style={{ backgroundColor : 'white', paddingTop: '1em'}} maxWidth="md">
           <Posts auth={auth}/>
          </Container>
        </Route>
  
        <PublicRoute auth={auth} path="/sign-up" component={SignUp} exact />
        
        <PublicRoute auth={auth} path="/sign-in" component={SignIn} exact />


        <Route path="/post/:id" exact>
        <Container style={{ paddingTop: '1em', paddingBottom: '1em'}} maxWidth="xl">
          <SinglePost auth={auth}/>
        </Container>
        </Route>

        <PrivateRoute auth={auth} path="/create-post" component={NewPost} exact />

        <PrivateRoute auth={auth} path="/edit-post" component={EditPost} exact />
        
        <PrivateRoute auth={auth} path="/delete-post:id" component={EditPost} exact />

        <PrivateRoute auth={auth} path="/log-out" component={Logout} exact />

        <Redirect path="*" to="/"></Redirect> 

        </Switch>
       
    )
}
export default  Routes