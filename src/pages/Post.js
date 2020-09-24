import React, { useEffect,useState } from 'react'
// import Axios
import axios from 'axios';

export default function Post() {
  const [name, setName] = useState("");
  const urlLogin = "https://testing-api-foro.herokuapp.com/api/posts"

  useEffect(() => {
    const verPost = async () => {
      await axios.get(urlLogin)
        .then(res => {
          setName(res)
        })
        .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
    }
    verPost()
  }, []);
  
  if (name.length === 0) {
    return (
      <div>
        <h3>No badges were found</h3>
      </div>
    );
  }
  return( 
    
    <>
      <h1>Post</h1>
      {name.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              );
        })
      }
    </>
  )  
}
