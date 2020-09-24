//import React
import React, { useContext } from 'react';
//import Logo
import { Logo } from '../Logo';
//import styled component
import {
	Header as HeaderContent,
	MenuContainer,
	AvatarContainer,
	LogOut,
} from './styles';
//import avatar
import { Avatar } from '../Avatar';
//import the app context
import { Context } from '../../utils/Context';
//import button
import { Button } from '@material-ui/core';
//import link from react render dom
import { Link } from 'react-router-dom';
//import icons
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
//import menu component
import { Menu } from '../Menu';

//create and export header component
export const Header = () => {
	//use context
	const { user, logOut } = useContext(Context);

	return (
		<HeaderContent>
			{/*header component*/}
			<Link aria-label='link to home' style={{ width: 0 }} to='/'>
				<Logo />
			</Link>
			{/*logo with a link to the home page*/}
			{user !== undefined ? (
				<LogOut>
					{/*log out button*/}
					<Button
						aria-label='log out button'
						fullWidth={false}
						size='small'
						color='primary'
						variant='contained'
						onClick={() => logOut()}>
						Log Out
						<ExitToAppOutlinedIcon />
					</Button>
					{/*avatar*/}
					<AvatarContainer>
						<Avatar />
					</AvatarContainer>
				</LogOut>
			) : (
				<MenuContainer aria-label='menu container'>
					{/*Menu*/}
					<Menu aria-label='menu label' />
				</MenuContainer>
			)}
		</HeaderContent>
	);
};
