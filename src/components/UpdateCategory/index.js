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
export const UpdateCategory = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use context hooks
	const {
		categoryName,
		setCategoryName,
		updateCategory,
		setShowError,
		setError,
		categoryId,
		setCategoryId,
	} = useContext(Context);

	//handle the click event
	const handleOnClick = () => {
		//set the data
		setCategoryId(categoryId);
		setCategoryName(categoryName);
		//check if the input is empty
		if (categoryName === '' || categoryId === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setShowError(false);
			updateCategory();
		}
		//reset local state
		setCategoryName('');
		setCategoryId('');
	};

	return (
		<>
			<Typography>Update category</Typography>
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
				{/*category name*/}
				<Input
					aria-label='input for the name of the category'
					placeholder='category name'
					className={classes.input}
					value={categoryName}
					onChange={(e) => setCategoryName(e.target.value)}
				/>
				<Alert />
				<Button
					aria-label='button to make update'
					className={classes.button}
					variant='outlined'
					color='primary'
					onClick={handleOnClick}>
					Update!
				</Button>
			</FormGroup>
		</>
	);
};
