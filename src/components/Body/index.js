//import react and use context hook
import React, { Suspense, lazy, useContext } from 'react';
//import body background
import { BodyBackground } from './styles';
//import router elements
import { Route, Switch, Redirect } from 'react-router-dom';
//import layout
import { Layout } from '../../layout';
//import context
import { Context } from '../../utils/Context';
//import loader
import { Loader } from '../Loader';
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
				<Suspense fallback={<Loader aria-label='loader' />}>
					{/*route for categories*/}
					<Route exact path='/'>
						<Layout>
							<BodyBackground>
								<Categories />
							</BodyBackground>
						</Layout>
					</Route>
					<Route exact path='/dashboard'>
						{user?.roles?.length === 2 ? <DashBoard /> : <Redirect to='/' />}
					</Route>
					{/*route for specific category*/}
					<Route exact path='/category/:categoryName'>
						<Layout>
							<BodyBackground>
								<ListOfPosts />
							</BodyBackground>
						</Layout>
					</Route>
					{/*route for specific post*/}
					<Route exact path='/category/:categoryName/:post'>
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
