//import react
import React, { useState, useEffect, useContext } from 'react';
//import commit component
import { Commit } from '../Commit';
//import request tools
import { instance, commits } from '../../utils/requests';
//import context
import { Context } from '../../utils/Context';
//import components
import { Paper } from '@material-ui/core';
//import styles
import { useStyles } from './styles';

//create and export commits
export const Commits = () => {
	//use local state
	const [localCommits, setLocalCommits] = useState([]);
	//use styles
	const classes = useStyles();
	//use context
	const { user } = useContext(Context);

	//use effect to bring the commits
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(commits('5f6e57ce35d8fe00179bfc57'))
				.then((response) => setLocalCommits(response?.data || ''));

		bringUsers();
	}, []);

	// console.log(localCommits);

	return (
		<Paper className={classes.paper}>
			<Commit />
		</Paper>
	);
};
