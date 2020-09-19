//import react
import React from 'react';
//import categories
import { Categories } from '../Categories';
//import body background
import { BodyBackground } from './styles';

//create body component and export it
export const Body = () => {
	return (
		<BodyBackground>
			<Categories />
		</BodyBackground>
	);
};
