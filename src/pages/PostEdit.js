import React, { useEffect, useContext } from 'react'
import Loading from '../components/Loading';
import CreatePost from '../components/CreatePost'
import CardPost from '../components/CardPost';
import Button from '@material-ui/core/Button'
import { Context } from '../utils/Contex';
import { Link } from 'react-router-dom';
import { useStyles } from '../Style/'
// import Axios
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

export default function PostEdit(props) {
  const classes = useStyles();
  const {
    handleClickOpenCreatePost,
    posts, 
    user,
    setPosts,
    bringPost
  } = useContext(Context);

  const [post, setPost] = React.useState({})


  // Require post 

  useEffect(() => {
    bringPostEdit()
  }, []);

  const urlPostEdit = `https://testing-api-foro.herokuapp.com/api/posts/${props.match.params.post_id}`
const bringPostEdit = async () => {
  await axios.get(urlPostEdit)
    .then(res => {
      console.log(res.data);
      setPost(res.data)
    })
    .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
    console.log(urlPostEdit);
}
  
  if (posts.length === 0) {
    return (
      <Loading/>
    )
  } else {
        return(
          <>
            <CardPost key={post._id} data={post}/>
          </>
        )
      }
}
