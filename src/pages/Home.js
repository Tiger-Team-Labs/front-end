import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Axios
import axios from 'axios';
// bring Loading
import Loading from '../components/Loading';
// button
import Button from '@material-ui/core/Button'
// import Context
import { Context } from '../utils/Contex';



export default function Home() {
  const {
    user,
    categories,
    setCategories
  } = useContext(Context);

  // Require post 
  const urlCategories = "https://testing-api-foro.herokuapp.com/api/categories"

  const bringCategories = async () => {
    await axios.get(urlCategories)
      .then(res => {
        setCategories(res.data)
        console.log(res);
      })
      .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  }

  // bring data Categories
  useEffect(() => {
    bringCategories();
  }, []);

  // show loadign 
  if (categories.length === 0) {
    return (
      <>
        <h1>Bienvenidos a Foro App</h1>
        <Loading />
      </>
    );
  } else {
    // show Categories
    return (
      <>
        {categories.map((categorie, _id) => {
          return (
            <div key={categorie._id}>
              <h2>{categorie.name}</h2>
            </div>
          )
        })}
        {/* is Login or Register? */}
        {user !== undefined
          ? <Link to={"/posts"} >
            <Button variant="contained" color="default">
              Go to Post
            </Button>
            </Link>
          : null}
      </>
    )
  }
}
