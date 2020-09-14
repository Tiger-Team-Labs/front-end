//import react
import React from 'react';
//import material ui components
import { Avatar as AvatarImage } from '@material-ui/core';

//create and export Avatar component
export const Avatar = ({ name }) => {
	return <AvatarImage alt={name} src='/static/images/avatar/1.jpg' />;
};
