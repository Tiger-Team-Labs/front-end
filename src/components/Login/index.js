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
//import icon
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

//create and export login component
export const Login = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = useState(false);

	//use context hooks
	const {
		email,
		setEmail,
		password,
		setPassword,
		createUserForSignIn,
		setShowError,
		setError,
	} = useContext(Context);

	//const to handle the open of the modal
	const handleOpen = () => {
		setOpen(true);
	};

	//const to handle the close of the modal
	const handleClose = () => {
		if (email === '' || password === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setOpen(false);
			setShowError(false);
			createUserForSignIn();
		}
	};

	//handle the click event
	const handleOnClick = () => {
		//set the login
		setEmail(email);
		setPassword(password);
		//close the modal
		handleClose();
		//reset local state
		setEmail('');
		setPassword('');
	};

	return (
		<>
			{/*Button to display the modal*/}
			<Button
				aria-label='sign in open button'
				style={{ color: 'white' }}
				type='button'
				onClick={handleOpen}>
				Sign In <VpnKeyOutlinedIcon style={{ marginLeft: '.2rem' }} />
			</Button>
			{/*Modal component*/}
			<Modal
				aria-label='modal to sign in'
				className={classes.modal}
				open={open}
				onClose={() => {
					setOpen(false);
					setShowError(false);
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				{/*Fade animation for the modals*/}
				<Fade in={open}>
					<div className={classes.paper}>
						{/*Form styled component*/}
						<FormGroup aria-label='form group'>
							{/*Inputs (control it)*/}
							<Input
								aria-label='input for the email'
								autoFocus={true}
								placeholder='Email'
								className={classes.input}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								aria-label='input for the password'
								placeholder='Password'
								className={classes.input}
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Alert />
							<Button
								aria-label='button to make the login'
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
