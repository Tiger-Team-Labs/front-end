//import react
import React from 'react';
//import categories
import { Categories } from '../Categories';
//import body background
import { BodyBackground } from './styles';
//import router elements
import { Route, Switch } from 'react-router-dom';
//import list post component
import { ListOfPosts } from '../ListOfPosts';
//import post component
import { Post } from '../Post';

//create body component and export it
export const Body = () => {
	return (
		<BodyBackground>
			<Switch>
				<Route path='/' exact>
					<Categories />
				</Route>
				<Route path='/:category'>
					<ListOfPosts />
				</Route>
				<Route path='/:category/:post'>
					<Post />
				</Route>
			</Switch>
		</BodyBackground>
	);
};
