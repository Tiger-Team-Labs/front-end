//import axios
import axios from 'axios';

//create the instance
export const instance = axios.create({
	baseURL: 'https://api-foro.herokuapp.com/api',
});

//create end points
export const postUser = '/auth/signup';
