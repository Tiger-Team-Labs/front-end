//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import hashRouter
import { HashRouter as Router } from 'react-router-dom';
//import context provider
import { ContextProvider } from './utils/Context';
//import app component
import { App } from './components/App';
//import service worker
import * as serviceWorker from './utils/serviceWorker';
//import global styles
import './GlobalStyles.css';

//create root const
const root = document.getElementById('root');

render(
	<ContextProvider>
		<Router basename='/'>
			<App />
		</Router>
	</ContextProvider>,
	root,
);

//start the service worker
serviceWorker.register();
