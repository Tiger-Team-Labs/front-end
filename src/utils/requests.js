//import axios
import axios from 'axios';

//create the instance
export const instance = axios.create({
	//baseURL: 'https://api-foro.herokuapp.com/api',
	baseURL: 'https://testing-api-foro.herokuapp.com/api',
});

//create end points
export const postUser = '/auth/signup/';
//check user
export const checkUserInDb = '/auth/login/';
//get posts
export const getPosts = '/posts/';
//post a new pose
export const postNewPost = '/posts/';
//delete a post
export const deleteWithId = (id) => `/posts/${id}`;
//update post
export const updateWithId = (id) => `/posts/${id}`;
//read categories
export const readCategories = '/categories/';
//create category
export const createCategory = '/categories/';
//update category
export const updateCategoryWithId = (id) => `/categories/${id}`;
//delete category
export const deleteCategoryWithId = (id) => `/categories/${id}`;
//bring users
export const readUsers = '/users/';
//delete user with id
export const deleteUserWithId = (id) => `/users/${id}`;
//update user with id
