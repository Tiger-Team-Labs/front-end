//import react
import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography } from '@material-ui/core';

//create and import postC, art component
export const PostCard = ({ title }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
};
