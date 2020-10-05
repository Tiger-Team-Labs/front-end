import React, { useContext, useEffect, useState } from 'react';
// import Axios
import axios from 'axios';
// bring Loading
import Loading from '../components/Loading';
// bring Card
import Cards from '../components/Card'
// import Context
import { Context } from '../utils/Contex';
import { urlNewPost } from '../utils/Route'
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useStyles } from '../Style'
import CardPostComent from '../components/CardPostComent'





export default function Comment(props) {
  const classes = useStyles();
  const {
    auxiliarValues,
    setAuxiliarValues,
    categories,
    user,
    setCategories,
  } = useContext(Context);

  const[coment, setComent] = useState("")
  // Metod axios GET post by id
  const bringComments = async () => {
    await axios.get(urlNewPost + props.match.params.post_id + '/comment',
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res.data)
        
        
        })

      .catch(error => {
        console.error(`Algo pasó en createNewPost: ${error}`)

      })
  }

  useEffect(() => {
    bringComments()
  }, []);




    return (
      <section>
      
          <CardPostComent  data={auxiliarValues}/>
        

    
    </section>
  )



}
