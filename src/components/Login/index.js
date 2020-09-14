//import react
import React from 'react';
//import custom styles
import { useStyles } from './styles';
//import material ui components
import {
	Button,
	Modal,
	Backdrop,
	Fade,
	Input,
	FormGroup,
} from '@material-ui/core';

//create and export login component
export const Login = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = React.useState(false);

	return <>hey there</>;
};
