import React, { useEffect,useState, useContext } from 'react'
// import Axios
import axios from 'axios';
import Loading from '../components/Loading';
import CreatePost from '../components/CreatePost'
import CardPost from '../components/CardPost';
import Button from '@material-ui/core/Button'
import { Context } from '../utils/Contex';

export default function Post() {
  const {
    handleClickOpenCreatePost,
  } = useContext(Context);
  const [posts, setPosts] = useState("");
  const urlLogin = "https://testing-api-foro.herokuapp.com/api/posts"

  // Require post 
  const bringPost = async () => {
    await axios.get(urlLogin)
      .then(res => {
        setPosts(res.data)
        console.log(res);
      })
      .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  }

  useEffect(() => {
    bringPost()
  }, []);
  
  if (posts.length === 0) {
    return (
      <Loading/>
    );
  } else {
    return (
      <>
      {posts.map((post, _id) => {
        return(
          <CardPost key={post._id} data={post}/>
        )
      })}
      <Button variant="outlined" color="primary" onClick={handleClickOpenCreatePost}>
        Create Post
      </Button>
      <CreatePost/>
    </>
    )
  }
}
