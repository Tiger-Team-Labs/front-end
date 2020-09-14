//import react
import React, { useState } from 'react';
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

//create and export register component
export const Register = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = useState(false);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	//const to handle the open of the modal
	const handleOpen = () => {
		setOpen(true);
	};

	//const to handle the close of the modal
	const handleClose = () => {
		setOpen(false);
	};

	return (
		//react fragment to return whole component
		<>
			{/*Button to display the modal*/}
			<Button type='button' onClick={handleOpen}>
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
							/>
							<Input placeholder='Email' className={classes.input} />
							<Input
								placeholder='Password'
								className={classes.input}
								type='password'
							/>
							<Button
								className={classes.button}
								variant='outlined'
								color='primary'>
								Sign Up
							</Button>
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
