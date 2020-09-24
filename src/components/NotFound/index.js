// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import img
import notFoundPic from '../../images/404Error-bro.svg'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function NotFound () {
  return (
    <React.Fragment>
      <Link to={"/"}>
        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/> } >
          Back to Home
        </Button>
      </Link>
      <img src={notFoundPic} alt="Logo"/>
      <a href="https://stories.freepik.com/web">Illustration by Freepik Stories</a>
    </React.Fragment>
  )
};