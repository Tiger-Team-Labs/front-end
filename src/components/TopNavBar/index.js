import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// Icons
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// bring Form
import FormDialog from '../FormDialog/index'
// import Context
import { Context } from '../../utils/Contex';
// import CustomizedSnackbars
import CustomizedSnackbars from '../SeccessAlarm'


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
    handleClickOpenFormDialog,
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
          <Button color="inherit" onClick={handleClickOpenFormDialog}> Login </Button>
        </Toolbar>
      </AppBar>
      <FormDialog />
      <CustomizedSnackbars />
    </div>
  );
}
