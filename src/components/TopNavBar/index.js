import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// import Context
import { Context } from '../../utils/Contex';
// Styles
import { useStyles } from '../../Style/'
import { LongMenu } from '../Menu/'


export default function TopNavBar() {

  const classes = useStyles();
  // Context
  const {
    handleClickOpenFormDialog,
    user,
  } = React.useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to={"/"} className={classes.link}>
              <SportsEsportsIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foro Game
          </Typography>
          {user !== undefined
            ? <>
              Hola {user.username} <LongMenu />
            </>
            : <>
              <Button color="inherit" onClick={handleClickOpenFormDialog}>
                Login
              </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
