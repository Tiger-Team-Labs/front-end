import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from '../Register';

export default function FormDialog(props) {
  const [openFormDialog, setOpenFormDialog] = React.useState(false);

  const handleClickOpenFormDialog = () => {
    setOpenFormDialog(true);
  };

  const handleCloseFormDialog = () => {
    
      setOpenFormDialog(false)
    
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpenFormDialog}>
        Aqui tiene que ir el login
      </Button>
      <Dialog open={openFormDialog} onClose={handleCloseFormDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this ForoGame, please enter your email address and name here. We will send updates
            occasionally.
          </DialogContentText>
          <Form/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseFormDialog} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
