//import react
import React, { useState, useEffect, useCallback, memo } from 'react';
//import axios logic
import {
	instance,
	postUser,
	checkUserInDb,
	postNewPost,
	getPosts,
	deleteWithId,
	updateWithId,
	createCategory,
	updateCategoryWithId,
	deleteCategoryWithId,
	readCategories,
} from './requests';

//create context and export it
export const Context = React.createContext();

//create functional component for context provider and export it
export const ContextProvider = memo(({ children }) => {
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
	//category
	const [categoryName, setCategoryName] = useState('');
	//category
	const [dashboardOption, setDashboardOption] = useState(1);
	//category
	const [categoryId, setCategoryId] = useState('');
	//category
	const [categories, setCategories] = useState([]);

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
					userName: response.data?.username,
					token: response.data?.token,
					id: response.data?._id,
					roles: response.data?.roles,
				});

				setResponse(response?.status);

				setToken(response.data?.token);
			})
			.catch((err) => setResponse(err.response?.status));
	};

	/**
	 * @description: allow us to check if exist in the db
	 */
	const createUserForSignIn = async () => {
		await instance
			.post(checkUserInDb, {
				email: email,
				password: password,
			})
			.then((response) => {
				setUser({
					userName: response.data?.username,
					token: response.data?.token,
					id: response.data?._id,
					roles: response.data?.roles,
				});

				setResponse(response?.status);

				setToken(response.data?.token);
			})
			.catch((err) => setResponse(err.response?.status));
	};

	/**
	 * @description: logout function
	 */
	const logOut = () => {
		setUser(undefined);
	};

	/**
	 * @description: allow us to create a user and check if exist in the db
	 */
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
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	/**
	 * @description: delete post
	 * @param id
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const deletePost = useCallback((id) => {
		instance
			.delete(deleteWithId(id), {
				headers: {
					'x-access-token': `${token}`,
				},
			})
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	});

	/**
	 * @description: update post
	 * @param id
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updatePost = (id) => {
		instance
			.put(
				updateWithId(id),
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
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	//create a new category
	/**
	 * @description: allow us to create a new category
	 */
	const createNewCategory = () => {
		instance
			.post(
				createCategory,
				{
					name: categoryName,
				},
				{
					headers: {
						'x-access-token': `${token}`,
					},
				},
			)
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	/**
	 * @description: update post
	 * @param id
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateCategory = () => {
		instance
			.put(
				updateCategoryWithId(categoryId),
				{
					name: categoryName,
				},
				{
					headers: {
						'x-access-token': `${token}`,
					},
				},
			)
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	/**
	 * @description delete a category with the id
	 */
	const deleteCategory = () => {
		instance
			.delete(deleteCategoryWithId(categoryId), {
				headers: {
					'x-access-token': `${token}`,
				},
			})
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	//use effect for bring the posts and categories
	/**
	 * bring the data from de data base
	 */
	useEffect(() => {
		const bringCategories = async () =>
			await instance
				.get(readCategories)
				.then((response) => setCategories(response?.data));

		const bringData = async () =>
			await instance.get(getPosts).then((response) => setPosts(response?.data));

		bringCategories();
		bringData();
	}, [response]);

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
				deletePost,
				updatePost,
				categoryName,
				setCategoryName,
				createNewCategory,
				dashboardOption,
				setDashboardOption,
				categoryId,
				setCategoryId,
				updateCategory,
				deleteCategory,
				categories,
			}}>
			{children}
		</Context.Provider>
	);
});
