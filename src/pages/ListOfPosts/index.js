//import react
import React, { useState } from 'react';
//import post component
import { PostCard } from '../../components/PostCard';
//import link component
import { Link } from 'react-router-dom';
//import grid component from materia ui
import Grid from '@material-ui/core/Grid';

//create list of post component and export it
export const ListOfPosts = () => {
	const [posts] = useState([
		{ _id: 'ab', post: 'some text', category: 'action games' },
		{ _id: 'cd', post: 'some text', category: 'action games' },
		{ _id: 'ef', post: 'some text', category: 'action games' },
		{ _id: 'jh', post: 'some text', category: 'action games' },
		{ _id: 'jhw', post: 'some text', category: 'action games' },
		{ _id: 'jhwq', post: 'some text', category: 'action games' },
		{ _id: 'jhdf', post: 'some text', category: 'action games' },
		{ _id: 'jha', post: 'some text', category: 'action games' },
		{ _id: 'jhq', post: 'some text', category: 'action games' },
	]);

	return (
		<>
			{/**posts in other words I need to make the fetch*/}
			{/*use the grid container*/}
			<Grid container spacing={2}>
				{/*use the grid item*/}
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						{posts.map((post, i) => (
							<Link key={post._id} to={`/${post.category}/${i}`}>
								<PostCard title={post.post} />
							</Link>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
