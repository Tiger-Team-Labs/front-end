//import react
import React, { useState, useContext } from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import {  Button } from '@material-ui/core';
// import alarm
import CustomizedSnackbars from '../SeccessAlarm/index'
// value de context
import { Context } from '../../utils/Contex';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function Form() {
  const { values,
    setValues, handleCloseAlert,
    handleClickAlert,} = useContext(Context);

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
        {/* {submitted ? <CustomizedSnackbars showAlert={submitted} /> : null } */}
        <CustomizedSnackbars/>
        <TextField
          required
          id="firstName"
          label="First Name"
          variant="outlined"
          color="primary"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          color="primary"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <TextField
          id="userName"
          label="User Name"
          variant="outlined"
          color="primary"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
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
        <Button variant="contained" color="secondary" type="submit" onClick={handleClickAlert}>
          Send
        </Button>
        </form>
      
    </div>
  );
}

