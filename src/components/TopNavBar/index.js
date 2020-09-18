import React, {useEffect, useState} from 'react';
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
// Context
  const {
    handleClickOpenFormDialog,
  } = React.useContext(Context);
  
  // Value res
  const [name, setName] = useState("");

  useEffect(() => {
    fetch('https://testing-api-foro.herokuapp.com/') 
    .then(res => res.json()) 
    .then(res => setName(res)) 
    .catch(error => {
      console.log('Hubo un problema con la petición Fetch:' + error.message)
    });
  }, []); 


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
  <h1>Team: {name.author}</h1>
  <p>{name.description}</p>
    </div>
  );
}
