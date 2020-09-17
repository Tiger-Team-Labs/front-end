//import axios
import axios from 'axios';

//create the instance
export const instance = axios.create({
	baseURL: 'https://api-foro.herokuapp.com/api',
});

//create end points
export const postUser = '/auth/signup/';
//check user
export const checkUserInDb = '/auth/login/';
//get posts
export const getPosts = '/posts/';
//post a new pose
export const postNewPost = '/posts/';
