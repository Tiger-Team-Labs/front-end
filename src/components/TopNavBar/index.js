import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// bring Form
import FormDialog from '../FormDialog/index'
// import Context
import {Context} from '../../utils/Contex';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNavBar() {
  const classes = useStyles();
  const {
    open,
    setOpen
  } = React.useContext(Context);

  const handleClick = () => {
    setOpen(true);
    console.log(("abre modal"));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foro Game
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
        </Toolbar>
      </AppBar>
      {open ? <FormDialog open={true}/> : null }
    </div>
  );
}
