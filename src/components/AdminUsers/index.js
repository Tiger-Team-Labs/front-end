//import react
import React, { useContext } from 'react';
//import material ui components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
//import icons
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
//import context
import { Context } from '../../utils/Context';
//import styles
import { useStyles } from './styles';

export const AdminUsers = () => {
	const classes = useStyles();
	//use context
	const { users, deleteUser } = useContext(Context);

	//handle delete
	const handleDelete = (id) => {
		deleteUser(id);
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align='left'>user name</TableCell>
						<TableCell align='left'>email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((row) => (
						<>
							<TableRow key={row._id}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='left'>{row.username}</TableCell>
								<TableCell align='left'>{row.email}</TableCell>
							</TableRow>
							<IconButton onClick={handleDelete(row._id)}>
								<DeleteIcon />
							</IconButton>
							<IconButton>
								<UpdateIcon />
							</IconButton>
						</>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
