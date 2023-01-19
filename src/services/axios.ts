import axios from "axios";

export const axiosInstance = axios.create({
	headers: {
		post: {
			Authorization: process.env.REACT_APP_TOKEN,
		},
	},
});
