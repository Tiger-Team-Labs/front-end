//import react
import React, { memo, useContext } from 'react';
//import category component
import { Category } from '../../components/Category';
//import fixed component
import { FixedButton } from './styles';
//import open button
import DashboardIcon from '@material-ui/icons/Dashboard';
//import icon button component
import { IconButton } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';
//import link
import { Link } from 'react-router-dom';

//create list of post component and export it
const Categories = memo(() => {
	//use context
	const { user, categories } = useContext(Context);

	return (
		<>
			{/**show the list of categories*/}
			{/**add the flip move effect*/}
			{categories.map((category, i) => (
				<Category
					aria-label='category card'
					key={i}
					name={category?.name}
					categoryId={category?._id}
				/>
			))}
			{/*Display the button for the dash board*/}
			{user?.roles.length === 2 && (
				<Link aria-label='link' to='/dashboard'>
					<FixedButton>
						<IconButton aria-label='dashboard logo' color='inherit'>
							<DashboardIcon aria-label='dashboard logo' />
						</IconButton>
					</FixedButton>
				</Link>
			)}
		</>
	);
});

export default Categories;
