import React, { useEffect, useContext } from 'react'
import Loading from '../components/Loading';
import CreatePost from '../components/CreatePost'
import CardPost from '../components/CardPost';
import Button from '@material-ui/core/Button'
import { Context } from '../utils/Contex';



export default function Post() {

  const {
    handleClickOpenCreatePost,
    posts,
    user,
    bringPost,

  } = useContext(Context);


  // Require post  by use Effect

  useEffect(() => {
    bringPost()
  }, []);



  if (posts.length === 0) {
    return (
      <Loading />
    );
  } else {
    return (
      <>
        {posts.map((post, _id) => {
          return (
              <CardPost key={post._id} data={post} />
            
          )
        })}

        {
          user !== undefined
            ?
            <Button variant="outlined" color="primary" onClick={handleClickOpenCreatePost}>
              Create Post
            </Button>
            :
            null
        }
        <CreatePost />
        
      </>
    )
  }
}
