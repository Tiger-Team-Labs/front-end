//import react
import React, { useState, useEffect } from 'react';
//import axios logic
import {
	instance,
	postUser,
	checkUserInDb,
	postNewPost,
	getPosts,
} from './requests';

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
	//to handle the error
	const [error, setError] = useState(undefined);
	//token
	const [token, setToken] = useState(undefined);
	//posts
	const [posts, setPosts] = useState([]);

	//use effect for bring the posts
	/**
	 * bring the data from de data base
	 */
	useEffect(() => {
		const bringData = async () =>
			await instance.get(getPosts).then((response) => setPosts(response.data));

		bringData();
	}, []);
	console.log(posts);
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
					token: response.data.token,
				}),
			)
			.catch((err) => console.log(err));
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
			.then((response) => {
				setUser({
					email: email,
					token: response.data.token,
				});

				setToken(response.data.token);
			})
			.catch((err) => console.log(err));
	};

	/**
	 * @description: logout function
	 */
	const logOut = () => {
		setUser(undefined);
	};

	const createPost = () => {
		instance
			.post(
				postNewPost,
				{
					title: 'bernardo',
					content: 'hey',
				},
				{
					headers: {
						'x-access-token': `${token}`,
					},
				},
			)
			.then((response) => console.log(response));
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
				error,
				setError,
				logOut,
				createPost,
				posts,
			}}>
			{children}
		</Context.Provider>
	);
};
