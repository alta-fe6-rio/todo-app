/** @format */

import axios from 'axios';

const apiRequest = async (url, method, body, token) => {
	const myToken = process.env.REACT_APP_API_KEY;
	token = myToken;
	var config = {
		method,
		url,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: body,
	};

	const response = await axios(config);
	return response.data;
};

export default apiRequest;
