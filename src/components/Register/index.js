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

//create and export register component
export const Register = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = useState(false);

	//use context hooks
	const { name, setName, email, setEmail, password, setPassword } = useContext(
		Context,
	);

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
		//set new user
		setName(name);
		setEmail(email);
		setPassword(password);
		//close the modal
		handleClose();
		//reset local state
		setEmail('');
		setName('');
		setPassword('');
	};

	return (
		//react fragment to return whole component
		<>
			{/*Button to display the modal*/}
			<Button style={{ color: 'white' }} type='button' onClick={handleOpen}>
				Sign Up
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
							{/*Inputs*/}
							<Input
								autoFocus={true}
								placeholder='Name'
								className={classes.input}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Email'
								className={classes.input}
							/>
							<Input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Password'
								className={classes.input}
								type='password'
							/>
							{/*Button and on click event display new user*/}
							<Button
								className={classes.button}
								variant='outlined'
								color='primary'
								onClick={handleOnClick}>
								Sign Up
							</Button>
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
