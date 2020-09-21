//import React
import React, { useContext } from 'react';
//import Login
import { Login } from '../Login';
//import Register
import { Register } from '../Register';
//import Logo
import { Logo } from '../Logo';
//import styled component
import {
	Header as HeaderContent,
	Buttons,
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

//create and export header component
export const Header = () => {
	//use context
	const { user, logOut } = useContext(Context);

	return (
		<HeaderContent>
			<Link style={{ width: 0 }} to='/'>
				<Logo />
			</Link>
			{user !== undefined ? (
				<LogOut>
					<Button
						fullWidth={false}
						size='small'
						color='primary'
						variant='contained'
						onClick={() => logOut()}>
						Log Out
						<ExitToAppOutlinedIcon />
					</Button>
					<AvatarContainer>
						<Avatar />
					</AvatarContainer>
				</LogOut>
			) : (
				<Buttons>
					<Register />
					<Login />
				</Buttons>
			)}
		</HeaderContent>
	);
};
