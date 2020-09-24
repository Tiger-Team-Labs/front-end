import React from 'react';
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
import {useStyles} from '../../Style/'





export default function TopNavBar() {
  const classes = useStyles();
  // Context
  const {
    handleClickOpenFormDialog,
    values,
    user
  } = React.useContext(Context);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SportsEsportsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foro Game
          </Typography>
          {user !== undefined 
            ? <Button color="inherit" onClick={handleClickOpenFormDialog}>
              Log-uot {values.name}
            </Button>
            : <Button color="inherit" onClick={handleClickOpenFormDialog}>
            Login
          </Button>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
