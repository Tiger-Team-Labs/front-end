//import react
import React, { forwardRef } from 'react';
//import materia ui components
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';
//import use styles
import { useStyles } from './styles';

//create list of post component and export it
export const Category = forwardRef(({ name }, ref) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} ref={ref}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5'>
						Live From Space
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						Mac Miller
					</Typography>
				</CardContent>
				<div className={classes.controls}></div>
			</div>
			<CardMedia
				className={classes.cover}
				image='/static/images/cards/live-from-space.jpg'
				title='Live from space album cover'
			/>
		</Card>
	);
});
