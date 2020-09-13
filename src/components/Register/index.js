//import react
import React from 'react';
//import custom styles
import { useStyles } from './styles';
//import material ui components
import { Button, Modal, Backdrop, Fade, Input } from '@material-ui/core';
//import styled components
import { Form } from './styles';

//create and export register component
export const Register = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use state hook
	const [open, setOpen] = React.useState(false);

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
				react-transition-group
			</Button>
			{/*Modal component*/}
			<Modal
				className={classes.modal}
				open={true}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				{/*Fade animation for the modals*/}
				<Fade in={true}>
					<div className={classes.paper}>
						{/*Form styled component*/}
						<Form>
							<Input
								placeholder='Name'
								variant='filled'
								className={classes.input}
							/>
							<Input placeholder='Email' className={classes.input} />
							<Input
								placeholder='Password'
								className={classes.input}
								type='password'
							/>
						</Form>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
