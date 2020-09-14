//import react
import React from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import { FormControl, Button } from '@material-ui/core';
// import icons
import {AccountCircle} from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  // aun no he guardado los valores 
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
    
    console.log('Se envio el formulario');
  }
  return (
    <div>
      {/* aquí no sé porque no sirve formcontrol, lo que quería es que quedara en un solo div pero se va pa todas partes */}
      <FormControl>
        {/* con form me parecio más cómodo trabajar que con InputLabel e InputAdornment */}
        <form 
        className={classes.root} 
        noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="userName"
          label="User Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          color="primary"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <Button variant="contained" color="secondary" onClick={handleChange}>
          Send
        </Button>
        </form>
      </FormControl>
    </div>
  );
}