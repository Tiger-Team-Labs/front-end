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
	//use state to handle the response
	const [response, setResponse] = useState(undefined);
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
	//post variables
	//title
	const [title, setTitle] = useState('');
	//content
	const [content, setContent] = useState('');

	//use effect for bring the posts
	/**
	 * bring the data from de data base
	 */
	useEffect(() => {
		const bringData = async () =>
			await instance.get(getPosts).then((response) => setPosts(response.data));

		bringData();
	}, [response]);

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
			.then((response) => {
				setUser({
					email: email,
					token: response.data.token,
				});

				setResponse(response.status);
			})
			.catch((err) => setResponse(err.response.status));
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

				setResponse(response.status);
			})
			.catch((err) => setResponse(err.response.status));
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
					title: title,
					content: content,
				},
				{
					headers: {
						'x-access-token': `${token}`,
					},
				},
			)
			.then((response) => setResponse(response.status))
			.catch((err) => setResponse(err.response.status));
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
				title,
				setTitle,
				content,
				setContent,
				response,
				setResponse,
			}}>
			{children}
		</Context.Provider>
	);
};
