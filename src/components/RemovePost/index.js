import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from '../../Style/'
// import Context
import { Context } from '../../utils/Contex';
// import Axios
import axios from 'axios';


export default function RemovePost(props) {
  const {
    user,
    openRemovePost,
    handleCloseRemovePost

  } = useContext(Context);

  const classes = useStyles();


  // Start
 // Delete Post
  // select post by Id
  const urlPostRemove = `https://testing-api-foro.herokuapp.com/api/posts/${props.id}`
const postRemoveById = async () => {
  await axios.delete(urlPostRemove,{
    headers: {
      'x-access-token' : `${user?.token}`}
  })
    .then(res => {
      console.log(res.status);
      props.history.push('/posts')
    })
    .catch(err => { 
      console.log(`Algo paso, aquí te lo muestro: ${err}`) 
      handleCloseRemovePost()
    })
}



  return (
    <div>
      <Dialog open={openRemovePost} onClose={handleCloseRemovePost} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title">Estás seguro de borrar el Post {props.data}</DialogTitle>
        <DialogContent>
          <Button onClick={()=> postRemoveById()} variant="contained" color="primary">
            YES
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}