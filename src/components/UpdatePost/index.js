//import react and its hooks
import React, { useContext, useState, useEffect, useCallback } from 'react';
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
import UpdateIcon from '@material-ui/icons/Update';
//import use styles
import { useStyles } from './styles';
//import the context
import { Context } from '../../utils/Context';
//import alert
import { Alert } from '../Alert';

//create create post component and export it.
export const UpdatePost = ({ post }) => {
	//use the styles
	const classes = useStyles();
	//isUpdate local state
	const [isUpdate, setIsUpdate] = useState(0);
	//use local state to open the modal
	const [open, setOpen] = useState(false);
	//use context methods
	const {
		setTitle,
		setContent,
		title,
		content,
		updatePost,
		setError,
		setShowError,
	} = useContext(Context);

	//handle the open of modal
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleOpen = useCallback(() => {
		setOpen(true);
		setIsUpdate((number) => number + 1);
	});

	//handle the close of modal
	const handleClose = () => {
		setOpen(false);
		//reset local state
		setTitle('');
		setContent('');
	};

	//handle the click event
	const handleOnClick = () => {
		if (title === '' || content === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setOpen(false);
			setShowError(false);
			updatePost(post?._id);
			handleClose();
		}
		//reset local state
		setTitle('');
		setContent('');
	};

	// use effect
	useEffect(() => {
		setTitle(post?.title);
		setContent(post?.content);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isUpdate]);

	return (
		<>
			<IconButton
				className={classes.icon}
				aria-labelledby='icon button for open the modal'
				type='button'
				onClick={handleOpen}>
				{/*'icon to show this modal'*/}
				<UpdateIcon fontSize='large' aria-labelledby='icon to create post' />
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
								{`update ${post?.title} post`}
							</Typography>
							<Input
								aria-label='title'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								autoFocus={true}
								placeholder={post?.title}
							/>
							<TextareaAutosize
								rowsMax={10}
								rowsMin={10}
								aria-label='text area'
								value={content}
								onChange={(e) => setContent(e.target.value)}
								placeholder={post?.content}
							/>
							<Button
								className={classes.button}
								aria-label='button'
								variant='outlined'
								color='primary'
								onClick={handleOnClick}>
								Update post
							</Button>
							<Alert />
						</FormGroup>
					</div>
				</Fade>
			</Modal>
		</>
	);
};
