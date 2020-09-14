//import react
import React, { useState, useEffect } from 'react';
//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	const [user, setUser] = useState(null);

	return (
		<Context.Provider value={(user, setUser)}>{children}</Context.Provider>
	);
};
