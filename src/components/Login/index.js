//import react
import React, { useState, useContext } from 'react';
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
//import context
import { Context } from '../../utils/Context';
//import alert component
import { Alert } from '../Alert';

//create and export login component
export const Login = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = useState(true);

	//use context hooks
	const {
		email,
		setEmail,
		password,
		setPassword,
		createUserForSignIn,
	} = useContext(Context);

	//const to handle the open of the modal
	const handleOpen = () => {
		setOpen(true);
	};

	//const to handle the close of the modal
	const handleClose = () => {
		setOpen(false);
	};

	//handle the click event
	const handleOnClick = () => {
		//set the login
		setEmail(email);
		setPassword(password);
		//crate the user
		createUserForSignIn();
		//close the modal
		//handleClose();
		//reset local state
		setEmail('');
		setPassword('');
	};

	return (
		<>
			{/*Button to display the modal*/}
			<Button style={{ color: 'white' }} type='button' onClick={handleOpen}>
				Sign In
			</Button>
			{/*Modal component*/}
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				{/*Fade animation for the modals*/}
				<Fade in={open}>
					<div className={classes.paper}>
						{/*Form styled component*/}
						<FormGroup>
							{/*Inputs (control it)*/}
							<Input
								autoFocus={true}
								placeholder='Email'
								className={classes.input}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								placeholder='Password'
								className={classes.input}
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Alert />
							<Button
								className={classes.button}
								variant='outlined'
								color='primary'
								onClick={handleOnClick}>
								Sign in
							</Button>
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
