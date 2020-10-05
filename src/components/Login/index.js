//import react
import React, { useContext } from 'react';
// import MakeStyle to make ours styles// import textField to form
// import formaControl an other componen from core
import {
  Button,
  TextField,
  makeStyles
} from '@material-ui/core';
// value de context
import { Context } from '../../utils/Contex';
// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
  rootp: {
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
}));



export default function Login() {

  const {
    valuesLogin,
    handleChangeLogin,
    handleSubmitLogin,
  } = useContext(Context);

  const classes = useStyles();

  return (
    <div className={classes.rootp}>
      <form
        className={classes.root}
        onSubmit={handleSubmitLogin}
      >
        <TextField
          autoFocus
          required
          fullWidth
          label="Email"
          variant="outlined"
          color="primary"
          name="email"
          autoComplete="current-email"
          value={valuesLogin.email}
          onChange={handleChangeLogin}
        />
        <TextField
          required
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          name="password"
          value={valuesLogin.password}
          onChange={handleChangeLogin}
        />
        <Button startIcon={<AccountCircleIcon />} variant="contained" color="secondary" type="submit" fullWidth >
          Log in
        </Button>
      </form>
    </div>
  );
}

