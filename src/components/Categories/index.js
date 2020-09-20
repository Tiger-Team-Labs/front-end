//import react
import React, { useState } from 'react';
//import category component
import { Category } from '../Category';
//import flip move

//create list of post component and export it
export const Categories = () => {
	//use state
	const [categories] = useState([
		{ title: 'action games' },
		{ title: 'adventure games' },
		{ title: 'strategy games' },
		{ title: 'horror games' },
	]);

	return (
		<>
			{/**show the list of categories*/}
			{/**add the flip move effect*/}
			{categories.map((category, i) => (
				<Category key={i} title={category.title} />
			))}
		</>
	);
};
