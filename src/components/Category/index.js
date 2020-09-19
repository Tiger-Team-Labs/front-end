//import react
import React from 'react';
//import materia ui components
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	SkipPreviousIcon,
} from '@material-ui/core';

//create list of post component and export it
export const Category = ({ name }) => {
	return (
		<>
			<Typography variant='h2'>{name}</Typography>
		</>
	);
};
