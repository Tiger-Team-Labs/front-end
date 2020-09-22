//import react
import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography } from '@material-ui/core';

//create and import postC, art component
export const PostCard = ({ title }) => {
	const classes = useStyles();

	return (
		<Card aria-label='post card preview' className={classes.root}>
			<CardContent>
				<Typography
					aria-label='post card preview title'
					variant='h5'
					component='h2'>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
};
