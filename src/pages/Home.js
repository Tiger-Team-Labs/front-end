import React, { useContext, useEffect } from 'react';
// import Axios
import axios from 'axios';
// bring Loading
import Loading from '../components/Loading';
// bring Card
import Cards from '../components/Card'
// import Context
import { Context } from '../utils/Contex';



export default function Home() {
  const {
    categories,
    setCategories,
  } = useContext(Context);

  // Require post 
  const urlCategories = "https://testing-api-foro.herokuapp.com/api/categories"

  const bringCategories = async () => {
    await axios.get(urlCategories)
      .then(res => {
        setCategories(res.data)
        console.log(`Llamado bringCategories ${res}`);
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
            <Cards key={categorie._id} data={categorie}/>
          )
        })}
      </>
    )
  }
}
