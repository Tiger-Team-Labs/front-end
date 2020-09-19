//import react
import React from 'react';
//import category component
import { Category } from '../Category';
//import flip move
import FlipMove from 'react-flip-move';

//create list of post component and export it
export const Categories = () => {
	return (
		<FlipMove>
			{/**show the list of categories*/}
			{/**add the flip move effect*/}
			<Category name='action games' />
			<Category name='adventure games' />
			<Category name='real time games' />
			<Category name='strategy games' />
		</FlipMove>
	);
};
