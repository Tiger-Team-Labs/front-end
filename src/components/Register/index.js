//import react
import React, { useEffect } from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import {  Button } from '@material-ui/core';
import { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

// import alarm



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  useEffect(()=>{
    
    console.log('Se cargo use Efecct de customized');
    
      

    
  },[]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}


export default function Form() {

  const [values,setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email:"",
    password: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValues({...values,[event.target.name]: event.target.value})
  };
  const alfredo = () => {
    console.log(`Otra funcion al mismo tiempo`);
    
    setSubmitted(true)
    console.log(submitted);
    
  };
  const handleClick = () => {
    setOpen(false);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  const classes = useStyles();

  return (
    <div>
      <CustomizedSnackbars  submitted={submitted}/>
      <form 
        className={classes.root} 
        onSubmit={handleSubmit}
        >
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
        <Button variant="contained" color="secondary" type="submit" onClick={handleClick,alfredo}>
          Send
        </Button>
        </form>
      
    </div>
  );
}

