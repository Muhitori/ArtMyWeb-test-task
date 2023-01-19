import axios from "axios";

export const axiosInstance = axios.create({
	headers: {
		patch: {
			Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
		},
	},
});
