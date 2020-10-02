import React, { useState, useEffect } from 'react'
import { urlCategories } from '../utils/Route'
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
// import Axios
import axios from 'axios';
// Loading
import Loading from '../components/Loading'



export const Admin = () => {
  const [categories, setCategories] = useState({})


  // Require post 
  const bringCategories = async () => {
    await axios.get(urlCategories)
      .then(res => {
        setCategories(res.data)
        console.log(`Llamado bringCategories ${res.data.name}`);
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
        <Loading />
      </>
    );
  }
  return (
    <section>
      <Button variant="contained" color="secondary">
        Agregar categoria
      </Button>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>V</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell>
              otro fila
            </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
    </section>
  )
}