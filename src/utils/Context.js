//import react
import React, { useState } from 'react';
//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	const [user, setUser] = useState({ name: '', email: '', password: '' });
	const [login, setLogin] = useState({ email: '', password: '' });

	console.dir(user);

	return (
		<Context.Provider value={{ user, setUser, setLogin }}>
			{children}
		</Context.Provider>
	);
};
