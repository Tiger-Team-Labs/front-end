import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from '../Register';
// value de context
import { Context } from '../../utils/Contex';

export default function FormDialog(props) {
  const {  
    openFormDialog, 
    setOpenFormDialog,
    handleClickOpenFormDialog,
    handleCloseFormDialog,
    } = useContext(Context);

  return (
    <div>
      <Dialog open={openFormDialog} onClose={handleCloseFormDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
          To be able to make comments and start interacting with your questions, please register.
          </DialogContentText>
          <Form/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
