//import react
import React, { useState } from 'react';
//import axios logic
import { instance, postUser, checkUser } from './requests';

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
	const [error, setError] = useState(undefined);

	/**
	 * @description: allow us to create a user and make the post to the db
	 */
	const createUserForSignUp = async () => {
		setUser({
			name,
			email,
			password,
		});
		await instance.post(postUser, { user }).catch((error) => setError(error));
		setShowError(true);
	};

	/**
	 * @description: allow us to create a user and check if exist in the db
	 */
	const createUserForSignIn = async () => {
		setUser({
			email,
			password,
		});
		await instance.post(checkUser, { user }).catch((error) => setError(error));
		setShowError(true);
	};

	/**
	 * @description: check the user
	 */
	const checkUser = () =>{
		if(user)
	}

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
			}}>
			{children}
		</Context.Provider>
	);
};
