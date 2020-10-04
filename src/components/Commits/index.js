//import react
import React, { useState, useEffect } from 'react';
//import commit component
import { Commit } from '../Commit';
//import request tools
import { instance, commits } from '../../utils/requests';
//import components
import { Input, Paper, Typography } from '@material-ui/core';
//import styles
import { useStyles } from './styles';

//create and export commits
export const Commits = ({ post }) => {
	//use local state
	const [localCommits, setLocalCommits] = useState([]);
	const [localResponse, setLocalResponse] = useState(undefined);
	const [newCommit, setNewCommit] = useState('');
	//use styles
	const classes = useStyles();

	//use effect to bring the commits
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(commits(post))
				.then((response) => {
					setLocalResponse(response);
					return response?.data;
				})
				.then((data) => setLocalCommits(data?.comments));

		bringUsers();
	}, [post, localResponse]);

	return (
		<Paper className={classes.paper}>
			<Typography variant='caption' className={classes.title}>
				Commits
			</Typography>
			<Paper className={classes.paper}>
				<Input
					placeholder='To make a commit, you have to write here! and press enter'
					value={newCommit}
					className={classes.input}
				/>
			</Paper>
			{localCommits?.length > 0 &&
				localCommits.map((commit) => (
					<Commit
						content={commit?.content}
						author={commit?.author}
						id={commit?._id}
						key={commit?._id}
					/>
				))}
		</Paper>
	);
};
