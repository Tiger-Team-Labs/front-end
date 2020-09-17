// import react
import React, { useState } from 'react';
//create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const handleClickAlert = () => {setOpenAlert(true);};
  const [values,setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email:"",
    password: "",
  });
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


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
    }}>
      {children}
    </Context.Provider>
  )
}