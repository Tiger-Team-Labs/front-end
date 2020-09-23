//import react
import React from 'react';
//import register component
import { Header } from '../components/Header';
//import response alert
import { ResponseAlert } from '../components/ResponseAlert';

//create and export layout component
export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<ResponseAlert />
			{children}
		</>
	);
};
