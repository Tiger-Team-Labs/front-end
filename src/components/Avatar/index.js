//import react and useContext hook
import React, { useContext } from 'react';
//import material ui components
import { Avatar as AvatarImage } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';

//create and export Avatar component
export const Avatar = ({ name }) => {
	//use context
	const { user } = useContext(Context);

	console.log(user);

	return <AvatarImage alt={user.name} src='/static/images/avatar/1.jpg' />;
};
