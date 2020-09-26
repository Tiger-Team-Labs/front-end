// import react
import React, { useState } from 'react';
// import Axios
import axios from 'axios';
//create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  // Alert
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const handleClickAlert = () => { setOpenAlert(true); };
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      setOpenFormDialog(false)
      return;
    }

    setOpenAlert(false);
  };
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    email: "",
    password: "",
    token: ""
  })
  const handleChangeLogin = (event) => {
    setValuesLogin({ ...valuesLogin, [event.target.name]: event.target.value })
  }
  // send datos  Login
  const urlLogin = "https://testing-api-foro.herokuapp.com/api/auth/login"
  // Ejemplo implementando el metodo axios:


  const createUserWhitFromLogin = async () => {
    await axios.post(urlLogin, valuesLogin)
      .then(res => {
        setUser({
          token: res.data.token,
				});
        console.log(res.data.status)
      })
      .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    handleClickAlert();
    setOpenFormDialog(false)
    console.log('Ahí van los datos del Login');
    createUserWhitFromLogin()
    setValuesLogin({
      email: "",
      password: "",
    })
  }

  // Form Register
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    token:"",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  // send datos
  const urlSignUp = "https://testing-api-foro.herokuapp.com/api/auth/signup"

  // Ejemplo implementando el metodo axios:
  const [user, setUser] = useState(undefined)
  const createUserWhitFormSignUP = async () => {
    await axios.post(urlSignUp, values)
      .then(res => {
        setUser(res.data);
        console.log(res)
      })
      
      .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickAlert();
    console.log(`'Ahí van los datos del formulario: ${values.name}'`);
    createUserWhitFormSignUP();
    setOpenFormDialog(false);

  }
  // FormDialog
  const [openFormDialog, setOpenFormDialog] = React.useState(false);

  const handleClickOpenFormDialog = () => {
    setOpenFormDialog(true);
  };

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  };
  // Home
  const [categories, setCategories] = useState("");


  // return Value
  return (
    <Context.Provider value={{
      open,
      setOpen,
      openAlert,
      setOpenAlert,
      handleCloseAlert,
      handleClickAlert,
      values,
      setValues,
      handleChange,
      handleSubmit,
      openFormDialog,
      setOpenFormDialog,
      handleClickOpenFormDialog,
      handleCloseFormDialog,
      valuesLogin,
      setValuesLogin,
      handleChangeLogin,
      handleSubmitLogin,
      user, 
      setUser,
      categories, 
      setCategories
    }}>
      {children}
    </Context.Provider>
  )
}