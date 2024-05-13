import { userType } from "@/types/userDataType";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

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

export const postFCMToken = createAsyncThunk(
	"auth/postFCMToken",
	async ({ token, nickname, password }: FCMTokenRequestType, thunkAPI) => {
		try {
			const data = axiosInstance.post<FCMTokenRequestType, FCMTokenResponseType>(END_POINTS.FCM, {
				token,
				nickname,
				password,
			});

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkOptions) => {
	try {
		return await axiosInstance.delete(END_POINTS.LOGOUT);
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const getIsOnboarding = createAsyncThunk("auth/getIsOnboarding", async (_, thunkOptions) => {
	try {
		const { data } = await axiosInstance.get(END_POINTS.IS_ONBOARDING);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const postOnboarding = createAsyncThunk(
	"auth/postOnboarding",
	async (userData: userType, thunkAPI) => {
		try {
			const { data } = await axiosInstance.post<userType>(END_POINTS.ONBOARDING, userData);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
