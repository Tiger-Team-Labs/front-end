import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from '../../Style/'
// import Context
import { Context } from '../../utils/Contex';
// import Axios
import axios from 'axios';


export default function CreatePost() {
  const {
    
    user,
    
  } = useContext(Context);

  const classes = useStyles();
  const [valuesCreatePost, setValuesCreatePost] = useState({
    title:"",
    content:""
  })
  const urlNewPost = 'https://testing-api-foro.herokuapp.com/api/posts'
  const createNewPost = async () => {
    
    await axios.post(urlNewPost,valuesCreatePost,
      {
        headers: {
          'x-access-token' : `${user?.token}`}
      },
      )
      .then(res => console.log(res))
      .catch (error => {
      console.error(`Algo pasó en createNewPost: ${error}`)
    })
  }

  const handleChangeCreatePost = (event) => {
    setValuesCreatePost({ ...valuesCreatePost, [event.target.name]: event.target.value })
  }
  const handleSubmitCreatePost = (event) => {
    event.preventDefault();
    console.log(`Ahí van los datos Para crear el Post datos: ${valuesCreatePost.title}`);
    console.log(`Si vienen los datos del token: ${user?.token} or ${user}`);
    createNewPost();    
  }
  
  // Open or Close Dialog Form
  const [
    openCreatePost, 
    setOpenCreatePost] = useState(false);

  const handleClickOpenCreatePost = () => {
    setOpenCreatePost(true);
  };
  const handleCloseCreatePost = () => {
    setOpenCreatePost(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpenCreatePost}>
        Open form dialog
      </Button>
      <Dialog open={openCreatePost} onClose={handleCloseCreatePost} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">A new post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create your new Post
          </DialogContentText>
          <form 
            className={classes.root}
            onSubmit={handleSubmitCreatePost}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Title Post"
              name="title"
              variant="outlined"
              value={valuesCreatePost.title}
              onChange={handleChangeCreatePost}
            />
            <TextField
              required
              margin="dense"
              id="content"
              name="content"
              label="Content Post"
              variant="outlined"
              value={valuesCreatePost.content}
              onChange={handleChangeCreatePost}
              fullWidth
            />
            <Button variant="contained" color="secondary" type="submit" fullWidth >
              Create Post
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}