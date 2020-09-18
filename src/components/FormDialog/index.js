import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// bring the Form
import Form from '../Register';
// brind the Login
import Login from '../Login/index'
// value de context
import { Context } from '../../utils/Contex';

export default function FormDialog(props) {
  const {
    openFormDialog,
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
          <Login />
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
}
