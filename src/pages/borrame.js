// // Require post 
  // const bringCategories = async () => {
  //   await axios.get(urlCategories)
  //     .then(res => {
  //       setCategories(res.data)
  //       console.log(`Llamado bringCategories ${res}`);
  //     })
  //     .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  // }

  // // bring data Categories
  // useEffect(() => {
  //   bringCategories();
  // }, []);

  // show loadign 
  // if (categories.length === 0) {
  //   return (
  //     <>
  //       <h1>Welcome to comment App</h1>
  //       <Loading />
  //     </>
  //   );
  // } else {
  //   // show Categories
  //   return (
  //     <>
  //       <h1>Welcome to Foro App</h1>
  //       {categories.map((categorie, _id) => {
  //         return (
  //           <Cards key={categorie._id} data={categorie} />
  //         )
  //       })}
        
  //     </>
  //   )
  // }