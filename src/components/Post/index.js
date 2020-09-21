//import react
import React from 'react';
// use params hook
import { useParams } from 'react-router-dom';

//create post component and export it
export const Post = ({ title }) => {
	const params = useParams();
	console.log(params);

	return (
		<>
			{/*post card*/}
			{/*title*/}
			{/*contents*/}
			<h2>{title}</h2>
			<h4>I'm the post</h4>
		</>
	);
};
