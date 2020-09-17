// import react
import React, { useState } from 'react';
//create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  // Alert
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const handleClickAlert = () => {setOpenAlert(true);};
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  // Form Register
  const [values,setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email:"",
    password: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickAlert();
    console.log('Ahí van los datos');
  }
  // FormDialog
  const [openFormDialog, setOpenFormDialog] = React.useState(false);

  const handleClickOpenFormDialog = () => {
    setOpenFormDialog(true);};

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)};


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
    }}>
      {children}
    </Context.Provider>
  )
}