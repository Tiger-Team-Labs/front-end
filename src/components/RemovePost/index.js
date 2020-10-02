import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Context
import { Context } from '../../utils/Contex';
// import Axios
import axios from 'axios';
// Route
import {urlBase} from '../../utils/Route'


export default function RemovePost(props) {
  const {
    user,
    openRemovePost,
    handleCloseRemovePost

  } = useContext(Context);



  // Start
  // Delete Post
  // select post by Id
  const urlPostRemove = `${urlBase}/posts/${props.match.params.post_id}`
  const postRemoveById = async () => {
    await axios.delete(urlPostRemove, {
      headers: {
        'x-access-token': `${user?.token}`
      }
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

  const cancellRemovePost = () => {
    props.history.push('/posts')
  }


  return (
    <div>
      <Dialog open={openRemovePost} onClose={()=>handleCloseRemovePost()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">¿Are you sure about remove the post?</DialogTitle>
        <DialogContent>
          <Button onClick={() => postRemoveById()} variant="contained" color="secondary" fullWidth>
            YES
          </Button>
          <Button onClick={() => cancellRemovePost()} variant="contained" color="primary" fullWidth>
            No
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}