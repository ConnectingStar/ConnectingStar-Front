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

export const postFCMToken = createAsyncThunk("auth/postFCMToken", async (_, thunkAPI) => {
	try {
		const data = axiosInstance.post<FCMTokenRequestType, FCMTokenResponseType>(END_POINTS.FCM);

		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
