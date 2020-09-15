//import React
import React from 'react';
//import Login
import { Login } from '../Login';
//import Register
import { Register } from '../Register';
//import Logo
import { Logo } from '../Logo';
//import styled component
import { Header as HeaderContent } from './styles';
//import avatar
import { Avatar } from '../Avatar';

//create and export header component
export const Header = () => {
	return (
		<HeaderContent>
			<Logo />
			<Register />
			<Login />
		</HeaderContent>
	);
};
