import React from 'react';
import axios from 'axios'
import  { Redirect } from 'react-router-dom'

export default class Logout extends React.Component {
    constructor(props){
        super(props);
        this.logOutServer = this.logOutServer.bind(this);
        
        this.state = {
            logoutSucces : false
        }
    }
   async logOutServer (event) {
    let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',      
        }
      }
         event.preventDefault();
         axiosConfig["withCredentials"] = true
    await axios.get(`http://localhost:2000/users/log-out/`, axiosConfig)
    .then(response => {
        console.log(response.data)
        if (response.status === 200) {
            this.setState({logoutSucces: true})
            window.location.reload()
        }
        
    })
    .catch(err => {
        console.log(err)
    })
   }

    render() {
        if (this.state.logoutSucces) {
            return <Redirect to="/"/>
        }
        return (
            <button onClick={this.logOutServer}>Log Out</button>
        )
    }
}

/*
const logOutServerRequest = async(event) => {
   
    const [logout, setLogout] = useState(false);

    
    let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',      
        }
      }
         event.preventDefault();
         axiosConfig["withCredentials"] = true
    await axios.get(`http://localhost:2000/users/log-out/`, axiosConfig)
    .then(response => {
        console.log(response.data)
        if (response.status === 200) {
            this.setState({logoutSucces: true})
            window.location.reload()
        }
        
    })
    .catch(err => {
        console.log(err)
    })
      }

    if (this.state.logoutSucces) {
        return <Redirect to="/"/>
    }
    return (
        <button onClick={this.logOutServerRequest}>Log Out</button>
    )
   
   export default logOutServerRequest;*/