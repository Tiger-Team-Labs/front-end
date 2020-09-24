import React from 'react';
// bring Form
import FormDialog from '../components/FormDialog'
// import CustomizedSnackbars
import CustomizedSnackbars from '../components/SeccessAlarm'
// styles
import { useStyles } from '../Style'



export default function Home() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <FormDialog />
      <CustomizedSnackbars />
    </div>
  );
}
