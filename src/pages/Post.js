import React, { useEffect,useState } from 'react'
// import Axios
import axios from 'axios';
import Loading from '../components/Loading';

export default function Post() {
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
      <div>
      {posts.map((post, _id) => {
        return(
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content} </p>
            <small>{post.createdAt} </small>
          </div>
        )
      })}
    </div>
    )
  }
}
