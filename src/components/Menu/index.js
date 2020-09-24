//import react and its hooks
import React, { useState } from 'react';
//import components
import { IconButton, Menu as MenuMaterial, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
//import delete user component
import { useStyles } from './styles';
//import Login
import { Login } from '../Login';
//import Register
import { Register } from '../Register';

//create and export Header component
export const Menu = () => {
	//use styles
	const classes = useStyles();
	//use state hook
	const [anchorEl, setAnchorEl] = useState(null);

	//handler the click of the menu button
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	//handle the close of the menu button
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{/*App bar component from material ui*/}
			<div className={classes.root}>
				<IconButton
					onClick={handleClick}
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu button'>
					<MenuIcon className={classes.icon} size='large' />
				</IconButton>
				<MenuMaterial
					aria-label='menu'
					id='simple-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<MenuItem aria-label='menu item' onClick={handleClose}>
						<Register />
					</MenuItem>
					<MenuItem aria-label='menu item' onClick={handleClose}>
						<Login />
					</MenuItem>
				</MenuMaterial>
			</div>
		</>
	);
};
