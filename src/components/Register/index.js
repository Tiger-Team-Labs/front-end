//import react
import React, { useContext } from 'react';
// import MakeStyle to make ours styles
// import textField to form
// import formaControl an other componen from core
import {
  Button,
  Divider,
  TextField,
  makeStyles,
} from '@material-ui/core';
// value de context
import { Context } from '../../utils/Contex';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    rootp: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  },
}));



export default function Form() {
  const {
    values,
    handleChange,
    handleSubmit,
  } = useContext(Context);

  const classes = useStyles();

  return (
    <div className={classes.rootp}>
      <Divider variant='fullWidth' />
      <form
        className={classes.root}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
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
          fullWidth
          id="lastName"
          label="Last Name"
          variant="outlined"
          color="primary"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="userName"
          label="User Name"
          variant="outlined"
          color="primary"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
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
          fullWidth
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
        <Button fullWidth variant="contained" color="secondary" type="submit" >
          Sign Up
        </Button>
      </form>

    </div>
  );
}

