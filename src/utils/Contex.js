//import react
import React from 'react';
//import custom hooks
import { useUser } from './hooks/useUser';
//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	const user = useUser({ name: 'Bernardo' });

	console.log(user);

	return <Context.Provider>{children}</Context.Provider>;
};
