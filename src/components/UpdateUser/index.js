//import react and its hooks
import React, { useContext, useState } from 'react';
//import Typography
import { Button, FormGroup, Input, Typography } from '@material-ui/core';
//import context
import { Context } from '../../utils/Context';
//import alert component
import { Alert } from '../Alert';
//import styles
import { useStyles } from './styles';

//create and export component
export const UpdateUser = () => {
	//use custom hooks from material ui
	const classes = useStyles();
	//use context hooks
	const { setShowError, setError, updateUser } = useContext(Context);
	//local state
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');

	//handle the click event
	const handleOnClick = () => {
		//check if the input is empty
		if (id === '' || name === '' || userName === '' || email === '') {
			setError((error) => (error = 'please check the inputs'));
			setShowError(true);
		} else {
			setShowError(false);
			updateUser(id, { name, userName, email });
		}
		//reset local state
		setId('');
		setName('');
		setUserName('');
		setEmail('');
	};

	return (
		<>
			<Typography>Update user</Typography>
			<FormGroup aria-label='form group'>
				{/*category id*/}
				<Input
					aria-label='input for the id of the category'
					autoFocus={true}
					placeholder='user id'
					className={classes.input}
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				{/*user name*/}
				<Input
					aria-label='input for the name of the user'
					placeholder='name'
					className={classes.input}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{/*user user name*/}
				<Input
					aria-label='input for the user name of the user'
					placeholder='userName'
					className={classes.input}
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				{/*user name*/}
				<Input
					aria-label='input for the name of the user'
					placeholder='email'
					className={classes.input}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
