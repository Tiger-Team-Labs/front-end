//import react and its hooks
import React, { useContext, useEffect, useState } from 'react';
// use params hook
import { useParams } from 'react-router-dom';
//import context
import { Context } from '../../utils/Context';

//create post component and export it
export const Post = () => {
	//use params hook
	const params = useParams();
	console.dir(params);
	//use context
	const { posts } = useContext(Context);
	//use state to save the post specific post
	const [post, setPost] = useState();

	//use effect to find the post
	useEffect(() => {
		setPost(posts.filter((post) => post._id === params.post));
	}, [params.post, posts]);

	return (
		<>
			{/*post card*/}
			{/*title*/}
			{/*contents*/}
			<h4>I'm the post</h4>
		</>
	);
};
