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
  const editUser = async () => {
    await axios.put(urlUser + valueUser._id, valueUser,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh Users
        bringUsers()
        // closeModal
        modalEditOpenClose()
        // clean de form
        setValueUser({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó en EditUser: ${error}`)
        // openModal
        modalEditOpenClose()
        setOpenAlertWarning(true)
      })
  }
  const updateValuesUser = (user) => {
    setValueUser(user)
  }
  // HandleSubmit Modal Edit User
  const handleSubmitEditUser = event => {
    // PreventRefresh
    event.preventDefault();
    // Bring data Users
    editUser();
    // closeModal
    modalEditOpenClose();
  }

  // Remove USER
  const modalRemoveOpenClose = () => {
    setOpenModalRemove(!openModalRemove)
  }
  // Remove user whit axios
  const removeUser = async () => {
    await axios.delete(urlUser + valueUser._id,
      {
        headers: {
          'x-access-token': `${user?.token}`
        }
      })
      .then(res => {
        console.log(res)
        // refresh user
        bringUsers()
        // closeModal
        modalRemoveOpenClose()
        // clean de form
        setValueUser({
          name: "",
        })
      })
      .catch(error => {
        console.error(`Algo pasó al tratar de Eliminar un usuario: ${error}`)
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
            
              <TableCell>Id</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => {
              return (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.roles[0]}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.updatedAt} </TableCell>

                  <TableCell>
                    <EditIcon onClick={() => {
                      modalEditOpenClose()
                      updateValuesUser(user)
                    }} />
                    <DeleteIcon onClick={() => {
                      console.log(user._id)
                      modalRemoveOpenClose()
                      updateValuesUser(user)
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
            onSubmit={handleSubmitEditUser}
          >
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              id="name"
              label="Name"
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
              margin="dense"
              id="password"
              label="Password"
              type="password"
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
          <Button onClick={() => removeUser()} className={classes.action} fullWidth variant="contained" color="primary">
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