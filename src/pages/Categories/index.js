//import react
import React, { useState, memo } from 'react';
//import category component
import { Category } from '../../components/Category';

//create list of post component and export it
export const Categories = memo(() => {
	//use state
	const [categories] = useState([
		{ title: 'action games' },
		{ title: 'adventure games' },
		{ title: 'strategy games' },
		{ title: 'horror games' },
		{ title: 'pay to win games' },
	]);

	return (
		<>
			{/**show the list of categories*/}
			{/**add the flip move effect*/}
			{categories.map((category, i) => (
				<Category aria-label='category catrd' key={i} title={category.title} />
			))}
		</>
	);
});
