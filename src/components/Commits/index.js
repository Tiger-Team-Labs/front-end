//import react
import React, { useState, useEffect, useContext } from 'react';
//import commit component
import { Commit } from '../Commit';
//import request tools
import { instance, commits } from '../../utils/requests';
//import components
import { Paper } from '@material-ui/core';
//import styles
import { useStyles } from './styles';

//create and export commits
export const Commits = ({ id }) => {
	//use local state
	const [localCommits, setLocalCommits] = useState([]);
	//use styles
	const classes = useStyles();

	//use effect to bring the commits
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(commits(id))
				.then((response) => setLocalCommits(response?.data || ''));

		bringUsers();
	}, [id]);

	console.log(localCommits);

	return (
		<Paper className={classes.paper}>
			<Commit />
		</Paper>
	);
};
