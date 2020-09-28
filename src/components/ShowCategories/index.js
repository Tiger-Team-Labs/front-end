//import react and its hooks
import React, { useState, useContext, useEffect } from 'react';
//import context
import { Context } from '../../utils/Context';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export const ShowCategories = () => {
	const classes = useStyles();

	//use local state
	const [rows, setRows] = useState([]);

	//use context
	const { categories } = useContext(Context);

	//use effect
	useEffect(() => {
		setRows(categories);
	}, [categories]);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align='left'>Category id</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='left'>{row._id}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
