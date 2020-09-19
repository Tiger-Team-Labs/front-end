//import react
import React from 'react';
//import category component
import { Category } from '../Category';

//create list of post component and export it
export const Categories = () => {
	return (
		<>
			{/**show the list of categories*/}
			{/**add the flip move effect*/}
			<Category name='action games' />
			<Category name='adventure games' />
			<Category name='real time games' />
			<Category name='strategy games' />
		</>
	);
};
