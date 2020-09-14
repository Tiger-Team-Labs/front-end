//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import hashRouter
import { HashRouter as Router } from 'react-router-dom';
//import context provider
import { ContextProvider } from './utils/Contex';
//import register component
import Form from './components/Register/index'
//import login component
import Login from './components/Login/index'


//create root const
const root = document.getElementById('root');

render(
	<ContextProvider>
		<Router>
			<Login />
		</Router>
	</ContextProvider>,
	root,
);

// //start the service worker
// serviceWorker.unregister();
