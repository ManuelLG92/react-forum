import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import {UserContext} from './users/userContext'



function PrivateRoute ({component: Component, auth, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => auth === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/sign-in' }} />}
      />
    )
  }

  export function PublicRoute ({component: Component, auth, ...rest}) {
    //console.log(auth)
    return (
      <Route
        {...rest}
        render={(props) => auth === false
          ? <Component {...props} />
          : <Redirect to={{pathname: '/' }} />}
      />
    )
  }

  export function PersonalRoutes ({component: Component, auth, user_id, ...rest}) {
    const user = React.useContext(UserContext)
    //console.log(auth)
    return (
      <Route
        {...rest}
        render={(props) => auth === true && user_id === user.id
          ? <Component {...props} />
          : <Redirect to={{pathname: '/posts' }} />}
      />
    )
  }
  
  export default PrivateRoute