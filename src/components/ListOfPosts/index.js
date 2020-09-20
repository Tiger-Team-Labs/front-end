//import react
import React, { useState } from 'react';
//import post component
import { PostCard } from '../PostCard';
//import link component
import { Link } from 'react-router-dom';

//create list of post component and export it
export const ListOfPosts = () => {
	const [posts] = useState([
		{ _id: 'ab', post: 'some text', category: 'action games' },
		{ _id: 'cd', post: 'some text', category: 'action games' },
		{ _id: 'ef', post: 'some text', category: 'action games' },
		{ _id: 'jh', post: 'some text', category: 'action games' },
	]);

	return (
		<>
			{/**posts in other words I need to make the fetch*/}
			{posts.map((post, i) => (
				<Link key={post._id} to={`/${post.category}/${i}`}>
					<PostCard title={post.post} />
				</Link>
			))}
		</>
	);
};
