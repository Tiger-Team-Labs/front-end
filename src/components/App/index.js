//import react
import React, { useContext } from 'react';
//import register component
import { Register } from '../Register';
//import Login Component
import { Login } from '../Login';
//import Avatar Component
import { Avatar } from '../Avatar';
//import Logo
import { Logo } from '../Logo';
//import the app context
import { Context } from '../../utils/Context';

//create and export App component
export const App = () => {
	const { user } = useContext(Context);
	return (
		<>
			<Logo />
			<Register />
			<Login />
			{user.name !== undefined && <Avatar />}
		</>
	);
};
