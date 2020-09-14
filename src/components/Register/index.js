//import react
import React from 'react';
// import MakeStyle to make ours styles
import { makeStyles } from '@material-ui/core/styles';
// import textField to form
import TextField from '@material-ui/core/TextField';
// import formaControl an other componen from core
import {  Button } from '@material-ui/core';
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

  const [form, setForm] = useState( {
    firstName: '',
    lastName: '',
    email: '',
    nickName: '',
    password: '',
  });

const handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] =  e.target.value;

    this.setState({
        form: {
            ...this.state.form,
            [e.target.name]:  e.target.value,
        },
    });
}
  
  const classes = useStyles();
  // aun no he guardado los valores 
  const [name, setName] = React.useState('');
  

  
  const handleSubmit= (e) =>{
    const { firstName, lastName, userName, email, password, } = this.state;
    e.preventDefault();
  }


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
      
    </div>
  );
}