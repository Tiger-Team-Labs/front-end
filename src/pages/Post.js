import React, { useEffect, useContext } from 'react'
import Loading from '../components/Loading';
import CreatePost from '../components/CreatePost'
import CardPost from '../components/CardPost';
import Button from '@material-ui/core/Button'
import { Context } from '../utils/Contex';
import { Link } from 'react-router-dom';
import { useStyles } from '../Style/'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

export default function Post() {
  const classes = useStyles();
  const {
    handleClickOpenCreatePost,
    posts, 
    user,
    bringPost,
    handleClickOpenEditPost
  } = useContext(Context);


  // Require post 

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
          <>
            <CardPost key={post._id} data={post}/>
            {user !== undefined 
            ?<>
              <IconButton edge="end"  >
                <Link onClick={handleClickOpenEditPost} to={`/posts/${post._id}/edit`} className={classes.cardPostButton}>
                  <EditIcon color="primary" />
                </Link>
              </IconButton>
              <IconButton>
                <Link to={`/post`} className={classes.cardPostButton}>
                  <DeleteIcon color="secondary" />
                </Link>
              </IconButton>
            </>
            : null}
          </>
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
      
      <CreatePost/>
    </>
    )
  }
}
