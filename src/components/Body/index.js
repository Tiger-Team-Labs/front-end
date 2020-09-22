//import react and use context hook
import React, { useContext } from 'react';
//import categories
import { Categories } from '../../pages/Categories';
//import body background
import { BodyBackground, FixedButton } from './styles';
//import router elements
import { Route, Switch } from 'react-router-dom';
//import list post component
import { ListOfPosts } from '../../pages/ListOfPosts';
//import post component
import { Post } from '../Post';
//import layout
import { Layout } from '../../layout';
//import create post component
import { CreatePost } from '../CreatePost';
//import context
import { Context } from '../../utils/Context';

//create body component and export it
export const Body = () => {
	//use context hook
	const { user } = useContext(Context);

	return (
		<Layout>
			<BodyBackground>
				{/*switch the components in other words decide which component will render*/}
				<Switch>
					{/*route for categories*/}
					<Route path='/' exact>
						<Categories />
					</Route>
					{/*route for specific category*/}
					<Route exact path='/:category'>
						<ListOfPosts />
					</Route>
					{/*route for specific post*/}
					<Route exact path='/:category/:post'>
						<Post />
					</Route>
				</Switch>
			</BodyBackground>
			{/*check if the user exist*/}
			{user !== undefined && (
				<FixedButton>
					<CreatePost />
				</FixedButton>
			)}
		</Layout>
	);
};
