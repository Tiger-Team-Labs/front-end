// import React
import React from 'react';
// import img
import notFoundPic from '../../images/404Error-bro.svg'


export default function NotFound () {
  return (
    <React.Fragment>
      <img src={notFoundPic} alt="Logo"/>
      <a href="https://stories.freepik.com/web">Illustration by Freepik Stories</a>
    </React.Fragment>
  )
};