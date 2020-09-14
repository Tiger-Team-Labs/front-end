//import react
import React from 'react';
//import register component
import { Register } from '../Register';
//import Login Component
import { Login } from '../Login';
//import Avatar Component
import { Avatar } from '../Avatar';

//create and export App component
export const App = () => {
	return (
		<>
			<Register />
			<Login />
			<Avatar />
		</>
	);
};
