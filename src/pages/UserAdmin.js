import React, { useState, useEffect, useContext } from 'react'
import { urlUser } from '../utils/Route'
import { Dialog, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, DialogTitle, DialogContent, TextField } from '@material-ui/core'
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



export const UserAdmin = () => {
  // stateGlobal
  const {
    user,
    setOpenAlertWarning
  } = useContext(Context);
  // styles
  const classes = useStyles();
  // state of users
  const [users, setUsers] = useState("")
  // state modalEditUsers
  const [openModalEdit, setOpenModalEdit] = useState(false)
  // Modal Remove Users
  const [openModalRemove, setOpenModalRemove] = useState(false)
  // state support  EditUser
  const [valueUser, setValueUser] = useState({
    name: "",
  })
  // Funcion state handleChange ModalEditUser
  const handleChangeEditUser = (event) => {
    setValueUser({ ...valueUser, [event.target.name]: event.target.value })
  }
  
  // Require Users 
  const bringUsers = async () => {
    await axios.get(urlUser, {
      headers: {
        'x-access-token': `${user?.token}`
      }
    })
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => { console.log(`Algo paso al traer a los usuarios, aquí te lo muestro: ${err}`) })
  }

  // bring data User
  useEffect(() => {
    bringUsers();
    return;
  }, []);

  // open and close ModalEdit
  const modalEditOpenClose = () => {
    setOpenModalEdit(!openModalEdit)
  }


  // Update EditUser
  // Update Edit user  whit axios
  const editCategory = async () => {
    await axios.put(urlUser + valueUser._id, valueUser,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh category
        bringUsers()
        // closeModal
        modalEditOpenClose()
        // clean de form
        setValueUser({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó en createNewCategory: ${error}`)
        // openModal
        modalEditOpenClose()
        setOpenAlertWarning(true)
      })
  }
  const updateValuesCategory = (id) => {
    setValueUser(id)
  }
  // HandleSubmit Modal Edit Category
  const handleSubmitEditCategory = event => {
    // PreventRefresh
    event.preventDefault();
    // axiosNewCategory
    editCategory();
    // closeModal
    modalEditOpenClose();
  }

  // Remove Category
  const modalRemoveOpenClose = () => {
    setOpenModalRemove(!openModalRemove)
  }
  // Remove category whit axios
  const removeCategory = async () => {
    await axios.delete(urlUser + valueUser._id,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh category
        bringUsers()
        // closeModal
        modalRemoveOpenClose()
        // clean de form
        setValueUser({
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
  if (users.length === 0) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <section className={classes.admin}>
      
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roles</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Updated At</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(category => {
              return (
                <TableRow key={category._id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.roles[0]}</TableCell>
                  <TableCell>{category.username}</TableCell>
                  <TableCell>{category.email}</TableCell>
                  <TableCell size={"small"}>{category.password}</TableCell>
                  <TableCell>{category._id}</TableCell>
                  <TableCell>{category.updatedAt} </TableCell>

                  <TableCell>
                    <EditIcon onClick={() => {
                      modalEditOpenClose()
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

      {/* modal Edit Start*/}
      <Dialog
        open={openModalEdit}
        onClose={() => modalEditOpenClose()}
        aria-labelledby="form-dialog-title">
        <DialogTitle> Edit  User </DialogTitle>
        <DialogContent>
          <form
            className={classes.createPost}
            onSubmit={handleSubmitEditCategory}
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
              value={valueUser.name}
              onChange={handleChangeEditUser}
            />
            <TextField
              fullWidth
              required
              margin="dense"
              id="username"
              label="User Name"
              name="username"
              variant="outlined"
              value={valueUser.username}
              onChange={handleChangeEditUser}
            />
            <TextField
              fullWidth
              required
              margin="dense"
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              value={valueUser.email}
              onChange={handleChangeEditUser}
            />
            <TextField
              fullWidth
              required
              multiline
              rows={3}
              margin="dense"
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              value={valueUser.password}
              onChange={handleChangeEditUser}
            />
            <Button fullWidth variant="contained" color="primary" type="submit" >
              Actualizar
              </Button>

            <Button onClick={() => modalEditOpenClose()} fullWidth variant="contained" color="secondary"  >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* modal  Edit End */}

      {/* Modal Delete Start  */}
      <Dialog
        open={openModalRemove}
        onClose={() => modalRemoveOpenClose()}
      >
        <DialogTitle> ¿Are you sure?  </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {`User ${valueUser.name}  will be deleted forever `}
          </Typography>
        </DialogContent>
        <div className={classes.action}>
          <Button onClick={() => removeCategory()} className={classes.action} fullWidth variant="contained" color="primary">
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