//import react
import React from 'react';
//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	return <Context.Provider>{children}</Context.Provider>;
};
