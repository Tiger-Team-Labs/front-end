import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
// valor de context
import { Context } from '../../utils/Contex';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function WarningAlarm() {
  const classes = useStyles();
  const { handleCloseAlert,openAlertWarning
  } = useContext(Context);




  return (
    <div className={classes.root}>
      <Snackbar open={openAlertWarning} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning">
          Ops! Sorry, something happened, please try again!
        </Alert>
      </Snackbar>
    </div>
  );
}
