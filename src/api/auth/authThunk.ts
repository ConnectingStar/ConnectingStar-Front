import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance, authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

interface FCMTokenRequestType {
	token: string;
	nickname: string;
	password: string;
}

interface FCMTokenResponseType {
	tokenInfo: string;
	nickname: string;
}

interface WithdrawalRequestType {
	reason: string;
	content: string;
	deletedDt: string;
}

export const postFCMToken = createAsyncThunk(
	"auth/postFCMToken",
	async ({ token, nickname, password }: FCMTokenRequestType, thunkAPI) => {
		try {
			const data = authorizedAxiosInstance.post<FCMTokenRequestType, FCMTokenResponseType>(
				END_POINTS.FCM,
				{
					token,
					nickname,
					password,
				},
			);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const logIn = createAsyncThunk("auth/logIn", async (authCode: string, thunkOptions) => {
	try {
		const { data } = await axiosInstance.post(END_POINTS.LOGIN, { socialType: "K", authCode });

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkOptions) => {
	try {
		return await authorizedAxiosInstance.post(END_POINTS.LOGOUT);
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const withdrawal = createAsyncThunk(
	"auth/withdrawal",
	async ({ reason, content, deletedDt }: WithdrawalRequestType, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.post(END_POINTS.WITHDRAWAL, {
				reason,
				content,
				deletedDt,
			});
		} catch (error) {
			thunkOptions.rejectWithValue(error);
		}
	},
);
