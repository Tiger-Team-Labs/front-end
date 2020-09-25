import React from 'react';
import { Link } from 'react-router-dom';
// bring Form
import FormDialog from '../components/FormDialog'
// import CustomizedSnackbars
import CustomizedSnackbars from '../components/SeccessAlarm'
// styles
import { useStyles } from '../Style'
// button
import Button from '@material-ui/core/Button'
// import Context
import { Context } from '../utils/Contex';



export default function Home() {
  const classes = useStyles();
  const {
    user
  } = React.useContext(Context);


  return (
    <div className={classes.root}>
      <h1>Bienvenidos éste es Home</h1>
      {user!==undefined
      ? <Link to={"/posts"}>
          <Button variant="contained" color="default">
            Go to Post
          </Button> 
        </Link>
      : null
      }
      <FormDialog />
      <CustomizedSnackbars />
    </div>
  );
}
