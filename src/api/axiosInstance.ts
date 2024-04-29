import axios from "axios";

import { BASE_URL } from "@/constants/api";

// import { getCookie } from "@/utils/getCookie";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	withCredentials: true,
});

// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		const accessToken = getCookie("tars_token");
// 		if (!accessToken) {
// 			window.location.href = "/onboarding?step=CreateAccount";
// 			return config;
// 		}

// 		config.headers["Content-Type"] = "application/json";

// 		return config;
// 	},
// 	(error) => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	},
// );

// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		if (error.response && error.response.status === 401) {
// 			window.location.href = "/onboarding?step=CreateAccount";
// 		}
// 		return Promise.reject(error);
// 	},
// );
