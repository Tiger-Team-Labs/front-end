//import react
import React from 'react';
//import register component
import { Header } from '../components/Header';

//create and export layout component
export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
