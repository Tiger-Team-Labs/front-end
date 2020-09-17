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
    console.log((values));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClickAlert();
    
  }


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
    }}>
      {children}
    </Context.Provider>
  )
}