import React from 'react';
import Dashboard from './components/dashboard.jsx'
import Index from './components/indexMain.jsx'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {UserContext} from  './components/users/userContext'

export default function App() {
  const [load, Setload] = React.useState(null)
//const UserContext = React.createContext(null)
const [auth, SetAuth] = React.useState(false)
const [userAuth, SetUserAuth ] = React.useState([])


React.useEffect(() => {
    isAuth()
}, [] ) 

const isAuth =  async() => {
    const cookies = new Cookies();
    const cookieName = "Go_session"
    const cookieValue = cookies.get(cookieName)
   // console.log(cookieValue)
    if (cookieValue !== undefined) {
     // console.log("Si cookie")
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',        
        }
      }
      axiosConfig["withCredentials"] = true
    await axios.get(`http://localhost:2000/auth/`, axiosConfig)
    .then(response => {

   //   SetLoaded(true)
     // console.log(response.status)
      if (response.status === 202) {
        SetAuth(true)
        SetUserAuth(response.data)
      } 
      Setload(true)
     //console.log(response.data) 
    })
    .catch(error => {

     //   SetLoaded(true)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
     console.log("El error fue: " , error)
     // return
     //
     
    } )
  } else {
    Setload(true)
  }
  }
 // console.log(auth)
if (!load) {
  return (
    <h1>Loading...</h1>
  )
} else {
  if (auth) {
      return (
        <UserContext.Provider value={userAuth}>
        <Dashboard auth={auth}/>
        </UserContext.Provider>
      )
    } else if (!auth){
        return (
            <Index auth={auth}/>
        )  
  }
}
 

}