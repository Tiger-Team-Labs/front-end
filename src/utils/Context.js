//import react
import React, { useState } from 'react';
//import axios logic
import { instance, postUser, checkUserInDb } from './requests';

//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	//fo handle the user
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(undefined);
	//to handler de alert component
	const [showError, setShowError] = useState(undefined);
	const [showSuccess, setShowSuccess] = useState(undefined);
	//to handle the error
	const [error, setError] = useState(false);

	/**
	 * @description: allow us to create a user and make the post to the db
	 */
	const createUserForSignUp = async () => {
		await instance.post(postUser, {
			name: name,
			username: userName,
			email: email,
			password: password,
		});
	};

	/**
	 * @description: allow us to create a user and check if exist in the db
	 */
	const createUserForSignIn = async () => {
		await instance.post(checkUserInDb, {
			email: email,
			password: password,
		});
	};

	/**
	 * @description: check the user if there are any error
	 * with the value then set this error and show the
	 * alert component
	 */
	const checkUser = () => {
		if (user === '') {
			setError((error) => (error = 'The user cannot be empty'));
			setShowError(true);
		}
		if (userName === '') {
			setError((error) => (error = 'The user name cannot be empty'));
			setShowError(true);
		}
		if (email === '') {
			setError((error) => (error = 'The email cannot be empty'));
			setShowError(true);
		}
		if (password === '') {
			setError((error) => (error = 'The password cannot be empty'));
			setShowError(true);
		}
	};

	return (
		<Context.Provider
			value={{
				user,
				setUser,
				name,
				setName,
				userName,
				setUserName,
				email,
				setEmail,
				password,
				setPassword,
				createUserForSignUp,
				createUserForSignIn,
				showError,
				setShowError,
				showSuccess,
				setShowSuccess,
				error,
				checkUser,
				setError,
			}}>
			{children}
		</Context.Provider>
	);
};
