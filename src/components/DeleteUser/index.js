//import react
import React, { useContext, useState } from 'react';

//create anx export delete user
//import Typography
import { Button, FormGroup, Input, Typography } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';
//import alert component
import { Alert } from '../Alert';
//import styles
import { useStyles } from './styles';

//create and export component
export const DeleteUser = () => {
	//use local state
	const [id, setId] = useState('');
	//use custom hooks from material ui
	const classes = useStyles();
	//use context hooks
	const { deleteUser, setShowError, setError } = useContext(Context);

	//handle the click event
	const handleOnClick = () => {
		//check if the input is empty
		if (id === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setShowError(false);
			deleteUser(id);
		}
		//reset local state
		setId('');
	};

	return (
		<>
			<Typography>Delete user</Typography>
			<FormGroup aria-label='form group'>
				{/*category id*/}
				<Input
					aria-label='input for the id of the user'
					autoFocus={true}
					placeholder='category id'
					className={classes.input}
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<Alert />
				<Button
					aria-label='button to make delete'
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
