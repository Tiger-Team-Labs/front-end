//import react
import React, { forwardRef } from 'react';
//import materia ui components
import { Typography, Card, CardContent } from '@material-ui/core';
//import use styles
import { useStyles } from './styles';

//create list of post component and export it
export const Category = forwardRef(({ title, src, subTitle }, ref) => {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root} ref={ref}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography className={classes.typo} component='h5' variant='h5'>
							{title}
						</Typography>
						<Typography className={classes.typo} variant='subtitle1'>
							{subTitle}
						</Typography>
					</CardContent>
					<div className={classes.controls}></div>
				</div>
			</Card>
		</>
	);
});
