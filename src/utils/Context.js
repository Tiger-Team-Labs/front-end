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
	readUsers,
	deleteUserWithId,
	updateUserWithId,
	commits,
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
	//users
	const [users, setUsers] = useState([]);

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
					categories: categoryId,
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

	//delete user
	/**
	 * @description delete the user with an id
	 * @param {number} id
	 */
	const deleteUser = (id) => {
		instance
			.delete(deleteUserWithId(id), {
				headers: {
					'x-access-token': `${token}`,
				},
			})
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	//update the user
	/**
	 *
	 * @param {number} id
	 * @param {string} body
	 */
	const updateUser = (id, body) => {
		console.log(body);
		console.log(id);
		instance
			.put(
				updateUserWithId(id),
				{
					name: body?.name,
					username: body?.userName,
					email: body?.email,
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

	//delete commit
	/**
	 * @description delete the commit with an id
	 * @param {number} id
	 */
	const deleteCommit = (id) => {
		instance
			.delete(commits('', id), {
				headers: {
					'x-access-token': `${token}`,
				},
			})
			.then((response) => setResponse(response?.status))
			.catch((err) => setResponse(err.response?.status));
	};

	//update the user
	/**
	 * @description update and commit with id and the body of the request
	 * @param {number} id
	 * @param {string} content
	 */
	const updateCommit = (id, content) => {
		console.log(content);
		instance
			.put(
				commits('', id),
				{
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
	const createCommit = (postId) => {
		instance
			.post(
				commits,
				{
					content: categoryName,
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

	//use effect to bring the users
	useEffect(() => {
		const bringUsers = async () =>
			await instance
				.get(readUsers, {
					headers: {
						'x-access-token': `${token}`,
					},
				})
				.then((response) => setUsers(response?.data));
		user?.roles?.length === 2 && bringUsers();
	}, [token, user, response]);

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
				users,
				deleteUser,
				updateUser,
				deleteCommit,
				updateCommit,
				createCommit,
			}}>
			{children}
		</Context.Provider>
	);
});
