//import react
import React from 'react';
//import category component
import { Category } from '../Category';
//import flip move
import FlipMove from 'react-flip-move';
//import Switch and Route components from react router dom
import { Switch } from 'react-router-dom';

//create list of post component and export it
export const Categories = () => {
	return (
		<Switch>
			<FlipMove>
				{/**show the list of categories*/}
				{/**add the flip move effect*/}
				<Category title='action games' subTitle='the best'></Category>
				<Category title='adventure games' subTitle='woow' />
				<Category title='strategy games' subTitle='¿the best game?' />
				<Category title='horror games' subTitle='this is insane' />
			</FlipMove>
		</Switch>
	);
};
