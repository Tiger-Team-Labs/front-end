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
	//use stat to save the post
	const [post, setPost] = useState({ title: '', content: '', updatedAt: '' });
	//use state to save the title specific post
	const [title, setTitle] = useState('');
	//use state to save the content of specific post
	const [content, setContent] = useState('');
	//use state for last update
	const [lastUpdate, setLastUpdate] = useState('');

	//use effect to find the post
	useEffect(() => {
		//save the post
		setPost(posts.find((post) => post._id === params.post));
	}, [params.post, post, posts]);

	//use effect to set the title and the content
	useEffect(() => {
		//save the title
		setTitle(post.title);
		//save the content
		setContent(post.content);
		//save the last update
		setLastUpdate(post.updatedAt);
	}, [post]);

	console.log(post);

	return (
		<>
			{/*post card*/}
			{/*title*/}
			<h1>{title}</h1>
			{/*contents*/}
			<h4>{content}</h4>
			{/*last update*/}
			<h4>{lastUpdate}</h4>
		</>
	);
};
