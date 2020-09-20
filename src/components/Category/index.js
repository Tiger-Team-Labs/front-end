//import react
import React from 'react';
//import materia ui components
import { Typography, Card, CardContent } from '@material-ui/core';
//import use styles
import { useStyles } from './styles';
//router elements
import { Link } from 'react-router-dom';
//import use param hook
import { useParams } from 'react-router-dom';

//create list of post component and export it
export const Category = ({ title }) => {
	const classes = useStyles();

	return (
		<Link to={title}>
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography className={classes.typo} component='h5' variant='h5'>
							{title}
						</Typography>
					</CardContent>
					<div className={classes.controls}></div>
				</div>
			</Card>
		</Link>
	);
};
