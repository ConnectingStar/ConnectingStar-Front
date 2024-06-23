import axios from "axios";

import { checkToken, handleTokenError } from "@/api/interceptors";

import { BASE_URL } from "@/constants/api";

// import { getCookie } from "@/utils/getCookie";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	withCredentials: true,
	headers: { "Content-Type": "application/json" },
});

export const authorizedAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	withCredentials: true,
});

authorizedAxiosInstance.interceptors.request.use(checkToken);

authorizedAxiosInstance.interceptors.response.use((response) => response, handleTokenError);

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
