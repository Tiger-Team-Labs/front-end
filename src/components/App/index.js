//import react
import React from 'react';
//import register component
import { Register } from '../Register';
//import Login Component
import { Login } from '../Login';

//create and export App component
export const App = () => {
	return (
		<>
			<Register />
			<Login />
		</>
	);
};
