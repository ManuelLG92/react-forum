import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import {Link} from "react-router-dom";

const UserNavBar = () => {

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
    },
    profileStyle: {
      color: 'white'
    }
    }
    )
  );
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

    return (

        <AppBar position="static" style={{ background: '#2E3B55', marginBottom: '1em' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <a className={classes.links} title="Index Page">ForoDogs</a>
               
          </Typography>
  
          <div style={{marginLeft:'5%',flexGrow: 1}}>
            <Typography variant="h6" className={classes.links}>
            
            <a href="/" className={classes.links} title="Index Page"><HomeIcon className={classes.icons}/> Index</a>
            </Typography>
            <Typography variant="h6" className={classes.links}>
            
            <a href="/posts" className={classes.links} title="Go to posts page"><ListAltIcon className={classes.icons}/> Posts</a>
            </Typography>
          
          </div>
            <div>
        <Button color="inherit"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Profile
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
          </Toolbar>
            </AppBar>
    )
}

export default UserNavBar