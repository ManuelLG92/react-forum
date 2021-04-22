import React from 'react';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import NavBar from './navigation/navigationGeneral'
import Routes from './routes/routes'

const Index = ({auth}) =>  {

/*
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
   /* title: {
      flexGrow: 1,
    },
    links: {
      margin: '0.5em',
      color: 'white',
      textDecoration: 'none',
      display: 'inline-block',
      "&:hover, &:focus": {
        textDecoration: 'none',
        color: 'white',
      }
    },
    logout: {
      marginLeft: '0.1em'
    }, 
    icons: {
    marginleft: '4em'
  },
  cardStyle: {
    width: '80%'
  }
  }
  )
);*/

  //const classes = useStyles();
 /* const Mstyle = 
  {
    margin: '3em',
    color: 'dark'
}*/

   
    return (
      <div>
        <Router> 
          <NavBar/>
          <Routes auth={auth}/>
        </Router> 
    
    </div>
    )


}   
 export default Index;