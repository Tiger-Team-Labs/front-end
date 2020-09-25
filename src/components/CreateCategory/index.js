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
		email,
		setEmail,
		password,
		setPassword,
		createUserForSignIn,
		setShowError,
		setError,
	} = useContext(Context);

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
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					aria-label='input for the password'
					placeholder='Password'
					className={classes.input}
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Alert />
				<Button
					aria-label='button to make the login'
					className={classes.button}
					variant='outlined'
					color='primary'
					onClick={handleOnClick}>
					Sign in
				</Button>
			</FormGroup>
		</>
	);
};
