import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Context
import { Context } from '../../utils/Contex';
// Styles
import {useStyles} from '../../Style/'


export default function TopNavBar() {
  const classes = useStyles();
  // Context
  const {
    handleClickOpenFormDialog,
    user,
    setUser
  } = React.useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to={"/"} className={classes.link}>
              <SportsEsportsIcon  />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foro Game
          </Typography>
          {user !== undefined 
            ? <>
                <AccountCircleIcon /> Hola {user.username}
                <Link to={"/"} className={classes.link}>
                  <Button color="inherit" onClick={()=>setUser(undefined)}>
                    Log-uot 
                  </Button>
                </Link>
              </>
            : 
                <Button color="inherit" onClick={handleClickOpenFormDialog}>
                  Login
                </Button>
              
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
