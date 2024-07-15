import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { authorizedAxiosInstance, axiosInstance } from "@/api/axiosInstance";

import { ACCESS_TOKEN_KEY, END_POINTS } from "@/constants/api";

interface ErrorResponseData {
	statusCode?: number;
	message?: string;
	code?: number;
}

export const checkToken = (config: InternalAxiosRequestConfig) => {
	if (!config.headers || config.headers.Authorization) {
		return config;
	}

	const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

	// if (!accessToken) {
	// 	window.location.href = "/onboarding?step=CreateAccount";

	// 	throw new Error("토큰이 유효하지 않습니다");
	// }

	config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
	const originalRequest = error.config;

	if (!error.response || !originalRequest) {
		throw new Error("에러가 발생했습니다.");
	}

	const { data } = error.response;

	if (data.code === 401) {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.REFRESH);

			originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;

			localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);

			return axiosInstance(originalRequest);
		} catch (error) {
			console.log(error);
		}
	}

	throw error;
};
