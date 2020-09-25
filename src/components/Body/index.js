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
//import dashboard
const DashBoard = lazy(() => import('../../pages/AdminView'));

//create body component and export it
export const Body = () => {
	return (
		<>
			{/*switch the components in other words decide which component will render*/}
			<Switch>
				<Suspense fallback={<div>Loading...</div>}>
					{/*route for categories*/}
					<Route exact path='/'>
						<Layout>
							<BodyBackground>
								<Categories />
							</BodyBackground>
						</Layout>
					</Route>
					{/*Route for dashboard*/}
					<Route exact path='/dashboard'>
						<DashBoard />
					</Route>
					{/*route for specific category*/}
					<Route exact path='/:category'>
						<Layout>
							<BodyBackground>
								<ListOfPosts />
							</BodyBackground>
						</Layout>
					</Route>
					{/*route for specific post*/}
					<Route exact path='/:category/:post'>
						<Layout>
							<BodyBackground>
								<Post />
							</BodyBackground>
						</Layout>
					</Route>
				</Suspense>
			</Switch>
		</>
	);
};
