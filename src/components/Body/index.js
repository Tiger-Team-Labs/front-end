//import react and use context hook
import React, { Suspense, lazy, useContext } from 'react';
//import body background
import { BodyBackground } from './styles';
//import router elements
import { Route, Switch } from 'react-router-dom';
//import layout
import { Layout } from '../../layout';
//import context
import { Context } from '../../utils/Context';
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
	// use context to check if there is an admin user
	const { user } = useContext(Context);

	return (
		<>
			{/*switch the components in other words decide which component will render*/}
			<Switch>
				{/*Route for dashboard*/}
				<Suspense fallback={<div>Loading...</div>}>
					{/*route for categories*/}
					<Route exact path='/'>
						<Layout>
							<BodyBackground>
								<Categories />
							</BodyBackground>
						</Layout>
					</Route>
					<Route exact path='/dashboard'>
						{user?.roles.length === 2 ? <DashBoard /> : <></>}
					</Route>
					{/*route for specific category*/}
					<Route exact path='/category/:category'>
						<Layout>
							<BodyBackground>
								<ListOfPosts />
							</BodyBackground>
						</Layout>
					</Route>
					{/*route for specific post*/}
					<Route exact path='/category/:category/:post'>
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
