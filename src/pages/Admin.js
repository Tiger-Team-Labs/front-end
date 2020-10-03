import React, { useState, useEffect, useContext } from 'react'
import { urlCategories } from '../utils/Route'
import { Dialog, DialogActions, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, DialogTitle, DialogContent, TextField } from '@material-ui/core'
// import Axios
import axios from 'axios';
// Loading
import Loading from '../components/Loading'
// icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from '../Style/index'
// import Context
import { Context } from '../utils/Contex';



export const Admin = () => {
  // stateGlobal
  const {
    user,
    setOpenAlertWarning
  } = useContext(Context);
  // styles
  const classes = useStyles();
  // state of categories
  const [categories, setCategories] = useState("")
  // state modalCreateCategories
  const [openModalCreate, setOpenModalCreate] = useState(false)
  // Modal Edit
  const [editcategory, setEditCategory] = useState(false)
  // Modal Remove
  const [openModalRemove, setOpenModalRemove] = useState(false)

  const editCategoryTrueFalse = () => {
    setEditCategory(true)
  }

  // state handleChange ModalCreateCategories
  const [valuecategory, setValueCategory] = useState({
    name: "",
  })
  // Funcion state handleChange ModalCreateCategories
  const handleChangeCreateCategories = (event) => {
    setValueCategory({ ...valuecategory, [event.target.name]: event.target.value })
  }
  // Create New category whit axios
  const createNewCategory = async () => {
    await axios.post(urlCategories, valuecategory,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh category
        bringCategories()
        // closeModal
        modalCreateOpenClose()
        // clean de form
        setValueCategory({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó en createNewCategory: ${error}`)
        // openModal
        modalCreateOpenClose()
        setOpenAlertWarning(true)
      })
  }

  // HandleSubmit Modal New Category
  const handleSubmitNewCategory = event => {
    // PreventRefresh
    event.preventDefault();
    // axiosNewCategory
    createNewCategory();
    // closeModal
    modalCreateOpenClose();
  }



  // Require post 
  const bringCategories = async () => {
    await axios.get(urlCategories)
      .then(res => {
        setCategories(res.data)
      })
      .catch(err => { console.log(`Algo paso, aquí te lo muestro: ${err}`) })
  }

  // bring data Categories
  useEffect(() => {
    bringCategories();
  }, []);

  // open and close ModalCreate
  const modalCreateOpenClose = () => {
    setOpenModalCreate(!openModalCreate)
  }


  // Update EditCategory
  // Update Edit category whit axios
  const editCategory = async () => {
    await axios.put(urlCategories + valuecategory._id, valuecategory,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh category
        bringCategories()
        // closeModal
        modalCreateOpenClose()
        // clean de form
        setValueCategory({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó en createNewCategory: ${error}`)
        // openModal
        modalCreateOpenClose()
        setOpenAlertWarning(true)
      })
  }
  const updateValuesCategory = (id) => {
    setValueCategory(id)
  }
  // HandleSubmit Modal Edit Category
  const handleSubmitEditCategory = event => {
    // PreventRefresh
    event.preventDefault();
    // axiosNewCategory
    editCategory();
    // closeModal
    modalCreateOpenClose();
  }

  // Remove Category
  const modalRemoveOpenClose = () => {
    setOpenModalRemove(!openModalRemove)
  }
  // Remove category whit axios
  const removeCategory = async () => {
    await axios.delete(urlCategories + valuecategory._id,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh category
        bringCategories()
        // closeModal
        modalRemoveOpenClose()
        // clean de form
        setValueCategory({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó en createNewCategory: ${error}`)
        // openModal
        modalRemoveOpenClose()
        setOpenAlertWarning(true)
      })
  }


  // show loadign 
  if (categories.length === 0) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <section className={classes.admin}>
      <Button onClick={() => { modalCreateOpenClose(); setEditCategory(false) }} variant="contained" color="secondary">
        Agree category
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
            {categories.map(category => {
              return (
                <TableRow key={category._id}>
                  <TableCell>
                    {category.name}
                  </TableCell>
                  <TableCell>
                    {category._id}
                  </TableCell>
                  <TableCell>
                    {category.__v}
                  </TableCell>
                  <TableCell>
                    <EditIcon onClick={() => {
                      setEditCategory(true)
                      modalCreateOpenClose()
                      updateValuesCategory(category)
                    }} />
                    <DeleteIcon onClick={() => {
                      console.log(category._id)
                      modalRemoveOpenClose()
                      updateValuesCategory(category)
                    }} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* modal Create or Edit Start*/}
      <Dialog
        open={openModalCreate}
        onClose={() => modalRemoveOpenClose()}
        aria-labelledby="form-dialog-title">
        <DialogTitle> {editcategory ? "Edit" : "Create"}  category </DialogTitle>
        <DialogContent>
          <form
            className={classes.createPost}
            onSubmit={editcategory
              ? handleSubmitEditCategory
              : handleSubmitNewCategory
            }
          >
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              id="name"
              label="Category"
              name="name"
              variant="outlined"
              value={editcategory ? valuecategory.name : valuecategory.name}
              onChange={handleChangeCreateCategories}
            />
            {editcategory
              ?
              <Button fullWidth variant="contained" color="primary" type="submit" >
                Actualizar
            </Button>
              :
              <Button fullWidth variant="contained" color="primary" type="submit" >
                Create
            </Button>

            }

            <Button onClick={() => modalCreateOpenClose()} fullWidth variant="contained" color="secondary"  >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* modal Create or Edit End */}

      {/* Modal Delete Start */}
      <Dialog
        open={openModalRemove}
        onClose={() => modalRemoveOpenClose()}
      >
        <DialogTitle> ¿Are you sure?  </DialogTitle>
        <DialogContent>
          {`The ${valuecategory.name} category will be deleted forever `}
        </DialogContent>
        <div className={classes.action}>
          <Button onClick={()=>removeCategory()} className={classes.action} fullWidth variant="contained" color="primary">
            Remove
        </Button>
        </div>
        <div className={classes.action}>
          <Button className={classes.admin} onClick={() => modalRemoveOpenClose()} fullWidth variant="contained" color="secondary">
            Cancel
        </Button>
        </div>
      </Dialog>
      {/* Modal Delete End */}
    </section>
  )
}