//import react hooks
import { useState, useEffect } from 'react';

//create and import use user hook
export const useUser = ({ name }) => {
	//use state hook
	const [user, setUser] = useState(null);
	//use effect hook
	useEffect(() => {
		setUser(name);
	}, [name]);

	console.log(user);

	return user;
};
