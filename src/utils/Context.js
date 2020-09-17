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
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	//to handle the error
	const [error, setError] = useState(undefined);

	/**
	 * @description: allow us to create a user and make the post to the db
	 */
	const createUserForSignUp = async () => {
		await instance
			.post(postUser, {
				name: name,
				username: userName,
				email: email,
				password: password,
			})
			.then((response) =>
				setUser({
					email: email,
					token: response.data,
				}),
			)
			.catch((err) => console.log(err));

		setShowSuccess((bool) => (bool = true));
	};

	/**
	 * @description: allow us to create a user and check if exist in the db
	 */
	const createUserForSignIn = async () => {
		await instance
			.post(checkUserInDb, {
				email: email,
				password: password,
			})
			.then((response) =>
				setUser({
					email: email,
					token: response.data,
				}),
			)
			.catch((err) => console.log(err));

		setShowSuccess((bool) => (bool = true));
	};

	console.log(user);

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
				setError,
			}}>
			{children}
		</Context.Provider>
	);
};
