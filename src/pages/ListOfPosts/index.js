//import react
import React, { useState, useContext } from 'react';
//import post component
import { PostCard } from '../../components/PostCard';
//import link component
import { Link } from 'react-router-dom';
//import grid component from materia ui
import { Grid, IconButton } from '@material-ui/core';
//import spring tools
import { useSpring, animated } from 'react-spring';
//import the context
import { Context } from '../../utils/Context';
// use params hook
import { useParams } from 'react-router-dom';
//use styled components
import { FixedButton } from './styles';
//import create post component
import { CreatePost } from '../../components/CreatePost';
//import icon
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

//create list of post component and export it
export const ListOfPosts = () => {
	//use the context
	const { posts, user, deletePost } = useContext(Context);

	// confi for animation
	const [state] = useState(true);
	const { x } = useSpring({
		from: { x: 0 },
		x: state ? 1 : 0,
		config: { duration: 1000 },
	});

	//use params
	const { category } = useParams();

	return (
		<>
			{/**posts in other words I need to make the fetch*/}
			{/*use the grid container*/}
			<Grid container spacing={2}>
				{/*use the grid item*/}
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						{/*show all the components*/}
						{posts.map((post, i) => (
							<>
								<Link
									style={{ textDecoration: 'none' }}
									key={post._id}
									to={`/${post.title}/${post._id}`}>
									{/*add the link ability to change into different pages*/}
									{/*add the animation ability*/}
									<animated.div
										style={{
											opacity: x.interpolate({
												range: [0, 1],
												output: [0.3, 1],
											}),
											transform: x
												.interpolate({
													range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
													output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
												})
												.interpolate((x) => `scale(${x})`),
										}}>
										{/*show the card*/}
										<PostCard title={post.title} id={post._id} />
									</animated.div>
								</Link>
								{/*Delete a post functionality*/}
								{user !== undefined && (
									<IconButton
										onClick={() => {
											deletePost(post._id);
										}}>
										<DeleteOutlineIcon />
									</IconButton>
								)}
							</>
						))}
					</Grid>
				</Grid>
			</Grid>
			{/*check if the user exist*/}
			{user !== undefined && (
				<FixedButton>
					<CreatePost category={category} />
				</FixedButton>
			)}
		</>
	);
};
