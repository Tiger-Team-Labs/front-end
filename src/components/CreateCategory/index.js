//import react and its hooks
import React, { useContext } from 'react';
//import Typography
import { Button, FormGroup, Input, Typography } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';
//import alert component
import { Alert } from '../Alert';
//import styles
import { useStyles } from './styles';

//create and export component
export const CreateCategory = () => {
	//use custom hooks from material ui
	const classes = useStyles();

	//use context hooks
	const {
		categoryName,
		setCategoryName,
		createNewCategory,
		setShowError,
		setError,
	} = useContext(Context);

	//handle the click event
	const handleOnClick = () => {
		//set the login
		setCategoryName(categoryName);
		//check if the input is empty
		if (categoryName === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setShowError(false);
			createNewCategory();
		}
		//reset local state
		setCategoryName('');
	};

	return (
		<>
			<Typography>Create new post</Typography>
			<FormGroup aria-label='form group'>
				{/*Inputs (control it)*/}
				<Input
					aria-label='input for the email'
					autoFocus={true}
					placeholder='Email'
					className={classes.input}
					value={categoryName}
					onChange={(e) => setCategoryName(e.target.value)}
				/>
				<Alert />
				<Button
					aria-label='button to make the login'
					className={classes.button}
					variant='outlined'
					color='primary'
					onClick={handleOnClick}>
					Create!
				</Button>
			</FormGroup>
		</>
	);
};
