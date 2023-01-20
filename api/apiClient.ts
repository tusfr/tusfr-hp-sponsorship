import axios from 'axios';

export const apiClient = axios.create({
	baseURL: '',
	withCredentials: true,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json'
	}
});
