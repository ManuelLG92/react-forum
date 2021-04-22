import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles } from '@material-ui/core/styles';
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    const useStyles = makeStyles((theme) =>
    ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
     /* title: {
        flexGrow: 1,
      },*/
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
  );
  const classes = useStyles();

    return (

        <AppBar position="static" style={{ background: '#2E3B55', marginBottom: '1em' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
               ForoDogs
          </Typography>
  
          <div style={{marginLeft:'30%',flexGrow: 1}}>
          <Typography variant="h6" className={classes.links}>
          <HomeIcon className={classes.icons}/>
          <a href="/" className={classes.links}>Index</a>
          </Typography>
          <Typography variant="h6" className={classes.links}>
          <ListAltIcon className={classes.icons}/>
          <a href="/posts" className={classes.links}>Posts</a>
          </Typography>
          </div>
  
          <div>
          <Button color="inherit" component={Link} to="/sign-up" style={{marginRight:'2em'}} >Sign-UP!</Button>
          <Button color="inherit" component={Link} to="/sign-in" style={{marginRight:'2em'}} >Login</Button>   
        </div>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar