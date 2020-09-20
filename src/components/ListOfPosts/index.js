//import react
import React, { useState } from 'react';
//import post component
import { Post } from '../Post';
//import link component
import { Link } from 'react-router-dom';

//create list of post component and export it
export const ListOfPosts = () => {
	const [posts] = useState([
		{ post: 1, category: 'action games' },
		{ post: 2, category: 'action games' },
		{ post: 3, category: 'action games' },
		{ post: 4, category: 'action games' },
	]);

	return (
		<>
			{/**posts in other words I need to make the fetch*/}
			{posts.map((post, id) => (
				<Link to={`/${post.category}/${id}`}>
					<Post key={id} title={post.post} />
				</Link>
			))}
		</>
	);
};
