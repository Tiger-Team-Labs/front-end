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
export const Commits = ({ post }) => {
	//use local state
	const [localCommits, setLocalCommits] = useState([]);
	//use styles
	const classes = useStyles();

	//use effect to bring the commits
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(commits(post))
				.then((response) => response?.data)
				.then((data) => setLocalCommits(data?.comments));

		bringUsers();
	}, [post]);

	console.log(localCommits);

	return (
		<Paper className={classes.paper}>
			{localCommits?.length > 0 &&
				localCommits.map((commit) => (
					<Commit
						content={commit?.content}
						author={commit?.author}
						key={commit?._id}
					/>
				))}
		</Paper>
	);
};
