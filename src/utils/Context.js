//import react
import React, { useState } from 'react';
//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(undefined);

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
			}}>
			{children}
		</Context.Provider>
	);
};
