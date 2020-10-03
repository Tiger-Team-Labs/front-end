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
	const [localResponse, setLocalResponse] = useState(undefined);
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
