//import react and react hooks
import React, { useContext, useEffect, useState } from 'react';
//import material ui components
import { Avatar as AvatarImage } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';
//import random color
import randomColor from 'randomcolor';

//create and export Avatar component
export const Avatar = () => {
	//use state
	const [color, setColor] = useState('');
	//use context
	const { user } = useContext(Context);

	//use Effect
	useEffect(() => {
		setColor(randomColor());
	}, []);

	return (
		<AvatarImage
			aria-label='avatar'
			style={{ background: color }}
			alt={user?.userName}
			src='/static/images/avatar/1.jpg'
		/>
	);
};
