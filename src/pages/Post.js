import React, { useEffect,useState } from 'react'
// import Axios
import axios from 'axios';

export default function Post() {
  const [posts, setPosts] = useState("");
  const urlLogin = "https://testing-api-foro.herokuapp.com/api/posts"

  useEffect(() => {
    const verPost = async () => {
      await axios.get(urlLogin)
        .then(res => {
          setPosts(res)
        })
        .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
    }
    verPost()
  }, []);
  
  if (posts.length === 0) {
    return (
      <div>
        <h3>No badges were found</h3>
      </div>
    );
  }
  return( 
    
    <>
      <h1>Post</h1>
      {posts.map(post => {
              return (
                <li key={post._id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </li>
              );
        })
      }
    </>
  )  
}
