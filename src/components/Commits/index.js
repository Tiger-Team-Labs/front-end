//import react
import React, { useState, useEffect } from 'react';
//import commit component
import { Commit } from '../Commit';
//import request tools
import { instance, commits } from '../../utils/requests';
//create and export commits
export const Commits = () => {
	//use local state
	const [localCommits, setLocalCommits] = useState([]);

	//use effect to bring the commits
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(commits('5f6e57ce35d8fe00179bfc57'), {
					headers: {
						'x-access-token':
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzJiNTcwODgxOTAyODk0MmYwYzBiNSIsImlhdCI6MTYwMTM1MzA3MywiZXhwIjoxNjAxNDM5NDczfQ.kvAot3OKbsfi1qZNn5pZUAzn7EYbm2F08UOZf7x7_PU',
					},
				})
				.then((response) => setLocalCommits(response?.data));

		bringUsers();
	}, []);

	console.log(localCommits);

	return <Commit />;
};
