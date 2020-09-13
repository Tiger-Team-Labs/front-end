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
	FormGroup,
	TextField,
} from '@material-ui/core';

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
			<Button type='button' onClick={handleOpen}>
				react-transition-group
			</Button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<FormGroup></FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
