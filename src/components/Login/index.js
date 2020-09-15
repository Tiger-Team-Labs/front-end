//import react
import React from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import {  Button } from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function Login() {

  const [values,setValues] = useState({
    email:"",
    password: "",
  })

  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (event) => {
    setValues({...values,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  const classes = useStyles();

  return (
    <div>
      <form 
        className={classes.root} 
        onSubmit={handleSubmit}
        >
        <TextField
          required
          id="email"
          label="Email"
          variant="outlined"
          color="primary"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" type="submit" >
          Login
        </Button>
        </form>
      
    </div>
  );
}

