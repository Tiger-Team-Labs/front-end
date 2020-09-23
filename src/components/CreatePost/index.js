//import react and its hooks
import React, { useContext, useState } from 'react';
//import material ui components
import {
	Modal,
	Backdrop,
	Fade,
	IconButton,
	Typography,
	FormGroup,
	Input,
	TextareaAutosize,
	Button,
} from '@material-ui/core';
//import icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//import use styles
import { useStyles } from './styles';
//import the context
import { Context } from '../../utils/Context';
//import alert
import { Alert } from '../Alert';

//create create post component and export it.
export const CreatePost = ({ category }) => {
	//use the styles
	const classes = useStyles();
	//use local state to open the modal
	const [open, setOpen] = useState(false);
	//use context methods
	const {
		setTitle,
		setContent,
		title,
		content,
		createPost,
		setError,
		setShowError,
	} = useContext(Context);

	//handle the open of modal
	const handleOpen = () => {
		setOpen(true);
	};

	//handle the close of modal
	const handleClose = () => {
		if (title === '' || content === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setOpen(false);
			setShowError(false);
			createPost();
		}
	};

	//handle the click event
	const handleOnClick = () => {
		//close the modal
		handleClose();
		//reset local state
		setTitle('');
		setContent('');
	};

	return (
		<>
			<IconButton
				className={classes.icon}
				aria-labelledby='icon button for open the modal'
				type='button'
				onClick={handleOpen}>
				{/*'icon to show this modal'*/}
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
				{/*'the modal with the frame animation'*/}
				<Fade in={open}>
					<div className={classes.paper} aria-label='paper'>
						{/*'form group'*/}
						<FormGroup aria-label='form group'>
							{/*title*/}
							<Typography
								align='center'
								className={classes.title}
								variant='h3'
								component='h3'
								gutterBottom
								aria-label='title'>
								{`Create your ${category} post`}
							</Typography>
							<Input
								aria-label='title'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								autoFocus={true}
								placeholder='Title'
							/>
							<TextareaAutosize
								aria-label='text area'
								value={content}
								onChange={(e) => setContent(e.target.value)}
								placeholder='content'
							/>
							<Button
								aria-label='button'
								variant='outlined'
								color='primary'
								onClick={handleOnClick}>
								Create post
							</Button>
							<Alert />
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
