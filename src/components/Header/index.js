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

//create and export header component
export const Header = () => {
	//use context
	const { user, logOut, createPost } = useContext(Context);

	return (
		<HeaderContent>
			<Logo />
			{user !== undefined ? (
				<LogOut>
					//<Button onClick={() => createPost()}>Create a post</Button>
					<Button
						fullWidth={false}
						size='small'
						color='secondary'
						variant='contained'
						onClick={() => logOut()}>
						Log Out
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
