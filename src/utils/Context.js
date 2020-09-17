//import react
import React, { useState } from 'react';
//import axios logic
import { instance, postUser, checkUser } from './requests';

//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(undefined);
	const [showError, setError] = useState(false);
	const [showSuccess, setSucces] = useState(false);

	const createUserForSignUp = async () => {
		setUser({
			name,
			email,
			password,
		});
		await instance.post(postUser, { user });
		setError(true);
	};

	const createUserForSignIn = async () => {
		setUser({
			email,
			password,
		});
		await instance.post(checkUser, { user });
		setError(true);
	};

	console.dir(user);

	return (
		<Context.Provider
			value={{
				user,
				setUser,
				name,
				setName,
				email,
				setEmail,
				password,
				setPassword,
				createUserForSignUp,
				createUserForSignIn,
			}}>
			{children}
		</Context.Provider>
	);
};
