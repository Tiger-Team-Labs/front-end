//import react and its hooks
import React from 'react';
//import material ui components
import {
	Modal,
	Backdrop,
	Fade,
	IconButton,
	Typography,
	FormGroup,
} from '@material-ui/core';
//import icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//import use styles
import { useStyles } from './styles';

//create create post component and export it
export const CreatePost = () => {
	//use the styles
	const classes = useStyles();
	//use local state to open the modal
	const [open, setOpen] = React.useState(false);

	//handle the open of modal
	const handleOpen = () => {
		setOpen(true);
	};

	//handle the close of modal
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton
				className={classes.icon}
				aria-labelledby='icon button for open the modal'
				type='button'
				onClick={handleOpen}>
				<AddCircleOutlineIcon
					fontSize='large'
					aria-labelledby='icon to create post'
				/>
			</IconButton>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper} aria-label='paper'>
						{'form group'}
						<FormGroup aria-label='form group'>
							<Typography variant='h1' component='h2' gutterBottom>
								Create your post
							</Typography>
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
