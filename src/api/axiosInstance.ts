import axios from "axios";

import { checkToken, handleTokenError } from "@/api/interceptors";

import { BASE_URL } from "@/constants/api";

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
	withCredentials: true,
});

export const authorizedAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	withCredentials: true,
});

authorizedAxiosInstance.interceptors.request.use(checkToken);

authorizedAxiosInstance.interceptors.response.use((response) => response, handleTokenError);
