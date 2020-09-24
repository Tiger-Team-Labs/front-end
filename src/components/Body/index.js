//import react and use context hook
import React, { Suspense, lazy } from 'react';
//import body background
import { BodyBackground } from './styles';
//import router elements
import { Route, Switch } from 'react-router-dom';
//import layout
import { Layout } from '../../layout';
//import categories
const Categories = lazy(() => import('../../pages/Categories'));
//import list post component
const ListOfPosts = lazy(() => import('../../pages/ListOfPosts'));
//import post component ../Post
const Post = lazy(() => import('../Post'));

//create body component and export it
export const Body = () => {
	return (
		<Layout>
			<BodyBackground>
				{/*switch the components in other words decide which component will render*/}
				<Switch>
					<Suspense fallback={<div>Loading...</div>}>
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
					</Suspense>
				</Switch>
			</BodyBackground>
		</Layout>
	);
};
