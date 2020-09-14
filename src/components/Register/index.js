//import react
import React from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import {  Button } from '@material-ui/core';
import { useState } from 'react';
// import icons
// import {AccountCircle} from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function Form() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  // no logro hacer que se guarden los valores
  const handleChange = e => {
    // aqui estoy haciendo una prueba para guardar los nuevos valores
    // const newForm = [...form, {[e.target.name]:  e.target.value,}]
    // setName(name)
    
  } 
  

  const classes = useStyles();

  return (
    <div>
      <form 
        className={classes.root} 
        noValidate autoComplete="off"
        onSubmit={handleSubmit}>
        <TextField
          required
          id="firstName"
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          value={name}
          onChange={e=> setName(e.target.value)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          color="primary"
          value={lastName}
          onChange={e=> setLastName(e.target.value)}
          
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
      
    </div>
  );
}