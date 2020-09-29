import React, { useContext, useEffect, useState} from 'react';
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


export default function EditPost(props) {
  const {
    openEditPost, 
    handleCloseEditPost
  } = useContext(Context);

  const classes = useStyles();
  const [postEdit, setPostEdit] = useState({
    title:"",
    content:""})


  // Require post 

  useEffect(() => {
    bringPostEdit()
  }, []);

  const urlPostEdit = `https://testing-api-foro.herokuapp.com/api/posts/${props.match.params.post_id}`
const bringPostEdit = async () => {
  await axios.get(urlPostEdit)
    .then(res => {
      console.log(res.data);
      setPostEdit(res.data)
    })
    .catch(err => { 
      console.log(`Algo paso, aquí te lo muestro: ${err}`) 
    })
}

  const handleChangeEditPost = (event) => {
    setPostEdit({ ...postEdit, [event.target.name]: event.target.value })
  }
  const handleSubmitEditPost = (event) => {
    event.preventDefault();
    console.log('Enviando formulario');
  }


  return (
    <div>
      <Dialog open={openEditPost} onClose={handleCloseEditPost} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Post {postEdit.title} </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your Post
          </DialogContentText>
          <form 
            className={classes.root}
            onSubmit={handleSubmitEditPost}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Title Post"
              name="title"
              variant="outlined"
              value={postEdit?.title}
              onChange={handleChangeEditPost}
            />
            <TextField
              required
              margin="dense"
              id="content"
              name="content"
              label="Content Post"
              variant="outlined"
              value={postEdit?.content}
              onChange={handleChangeEditPost}
              fullWidth
            />
            <Button variant="contained" color="secondary" type="submit" fullWidth >
              Edit Post
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}