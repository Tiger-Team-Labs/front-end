// import react
import React, { useState } from 'react';
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
  })
  const handleChangeLogin = (event) => {
    setValuesLogin({ ...valuesLogin, [event.target.name]: event.target.value })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    handleClickAlert();
    setOpenFormDialog(false)
    console.log('Ahí van los datos del Login');
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
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickAlert();
    console.log('Ahí van los datos del formulario');
    setOpenFormDialog(false)
    setValues({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  }
  // FormDialog
  const [openFormDialog, setOpenFormDialog] = React.useState(false);

  const handleClickOpenFormDialog = () => {
    setOpenFormDialog(true);
  };

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  };

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
    }}>
      {children}
    </Context.Provider>
  )
}