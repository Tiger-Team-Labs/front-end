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
  const [openAlertWarning, setOpenAlertWarning] = useState(false);
  const handleClickAlert = () => { setOpenAlert(true); };
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      setOpenFormDialog(false)
      return;
    }
    setOpenAlert(false);
    setOpenAlertWarning(false);
  };
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    email: "",
    password: "",
    
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
        setUser(res.data);
        console.log(res)
        handleClickAlert();
        setValuesLogin({
          email: "",
          password: "",
        })
      })
      .catch(err => { 
        console.log(`Algo paso, aquí te lo muestro: ${err}`);
        setOpenAlertWarning(true)
      })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setOpenFormDialog(false)
    console.log('Ahí van los datos del Login');
    createUserWhitFromLogin()
    
  }

  // Form Register
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  // send data whit Axios Post
  const urlSignUp = "https://testing-api-foro.herokuapp.com/api/auth/signup"

  const [user, setUser] = useState(undefined)
  const createUserWhitFormSignUP = async () => {
    await axios.post(urlSignUp, values)
      .then(res => {
        setUser(res.data);
        console.log(res);
        setValues({
          name: "",
          username: "",
          email: "",
          password: ""
        })
      })
      
      .catch(err => { 
        console.log(`Algo paso, aquí te lo muestro: ${err}`);
        setOpenAlertWarning(true)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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

  // State CreateNewPost
  const [valuesCreatePost, setValuesCreatePost] = useState({
    title:"",
    content:""})
  const [openCreatePost, setOpenCreatePost] = useState(false);
    // Open or Close Dialog Form
    const handleClickOpenCreatePost = () => {
      setOpenCreatePost(true);
    };
    const handleCloseCreatePost = () => {
      setOpenCreatePost(false);
    };

// Page Post
const [posts, setPosts] = useState("");
const urlPost = "https://testing-api-foro.herokuapp.com/api/posts"
const bringPost = async () => {
  await axios.get(urlPost)
    .then(res => {
      setPosts(res.data)
      console.log(res);
    })
    .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
}

// EditPost
const [openEditPost, setOpenEditPost] = useState(false);
    // Open or Close Dialog Form
    const handleClickOpenEditPost = () => {
      setOpenEditPost(true);
    }
    const handleCloseEditPost = () => {
      setOpenEditPost(false);
    };

  // return Value
  return (
    <Context.Provider value={{
      open,
      setOpen,
      openAlert,
      setOpenAlert,
      openAlertWarning, 
      setOpenAlertWarning,
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
      setCategories,
      valuesCreatePost, 
      setValuesCreatePost,
      openCreatePost, 
      setOpenCreatePost,
      handleCloseCreatePost,
      handleClickOpenCreatePost,
      posts, 
      setPosts,
      bringPost,
      openEditPost, 
      setOpenEditPost,
      handleClickOpenEditPost,
      handleCloseEditPost
    }}>
      {children}
    </Context.Provider>
  )
}