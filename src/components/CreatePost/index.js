import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from '../../Style/'


export default function CreatePost() {
  const classes = useStyles();
  const [createPost, setCreatePost] = useState({
    title:"",
    content:""
  })
  const handleChangeCreatePost = (event) => {
    setCreatePost({ ...createPost, [event.target.name]: event.target.value })
    console.log(createPost);
  }
  const handleSubmitCreatePost = (event) => {
    event.preventDefault();
    console.log(`Ahí van los datos Para crear el Post: ${createPost.title}`);    
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
          <form className={classes.root}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Title Post"
              name="title"
              variant="outlined"
              value={createPost.title}
              onChange={handleChangeCreatePost}
            />
            <TextField
              required
              margin="dense"
              id="content"
              name="content"
              label="Content Post"
              variant="outlined"
              value={createPost.content}
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