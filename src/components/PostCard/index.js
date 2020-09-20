//import react
import React from 'react';
import { useStyles } from './styles';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
} from '@material-ui/core';

//create and import postC, art component
export const PostCard = () => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom>
					Word of the Day
				</Typography>
				<Typography variant='h5' component='h2'>
					be{bull}nev{bull}o{bull}lent
				</Typography>
			</CardContent>
		</Card>
	);
};
