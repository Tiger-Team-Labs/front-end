//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import hashRouter
import { HashRouter as Router } from 'react-router-dom';
//import context provider
import { ContextProvider } from './utils/Contex';
//import App component
import App from './components/App/index'



//create root const
const root = document.getElementById('root');

render(
	<ContextProvider>
		<Router>
			<App />
		</Router>
	</ContextProvider>,
	root,
);

// //start the service worker
// serviceWorker.unregister();
