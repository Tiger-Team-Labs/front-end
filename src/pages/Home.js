import React, { useContext, useEffect } from 'react';
// import Axios
import axios from 'axios';
// bring Loading
import Loading from '../components/Loading';
// bring Card
import Cards from '../components/Card'
// import Context
import { Context } from '../utils/Contex';
import { urlCategories } from '../utils/Route'
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useStyles } from '../Style'






export default function Home() {
  const classes = useStyles();
  const {
    categories,
    user,
    setCategories,
  } = useContext(Context);

  // Require post 
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
        <h1>Welcome to Foro App</h1>
        <Loading />
      </>
    );
  } else {
    // show Categories
    return (
      <>
        <h1>Welcome to Foro App</h1>
        {categories.map((categorie, _id) => {
          return (
            <Cards key={categorie._id} data={categorie} />
          )
        })}
        {user?.roles.length === 2
          ?<>
              <Button>
                <Link to={"/user"} className={classes.link}>
                  User
              </Link>
              </Button>

          {`  `}

              <Button>
                <Link to={"/admin"} className={classes.link} >
                  Category
              </Link>
              </Button>

          </>
          : null
        }
      </>
    )
  }
}
