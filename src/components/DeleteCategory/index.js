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
export const DeleteCategory = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use context hooks
	const {
		deleteCategory,
		setShowError,
		setError,
		categoryId,
		setCategoryId,
	} = useContext(Context);

	//handle the click event
	const handleOnClick = () => {
		//set the data
		setCategoryId(categoryId);
		//check if the input is empty
		if (categoryId === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setShowError(false);
			deleteCategory();
		}
		//reset local state
		setCategoryId('');
	};

	return (
		<>
			<Typography>Delete category</Typography>
			<FormGroup aria-label='form group'>
				{/*category id*/}
				<Input
					aria-label='input for the id of the category'
					autoFocus={true}
					placeholder='category id'
					className={classes.input}
					value={categoryId}
					onChange={(e) => setCategoryId(e.target.value)}
				/>
				<Alert />
				<Button
					aria-label='button to make update'
					className={classes.button}
					variant='outlined'
					color='secondary'
					onClick={handleOnClick}>
					Delete!
				</Button>
			</FormGroup>
		</>
	);
};
