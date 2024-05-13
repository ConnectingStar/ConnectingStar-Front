import { userType } from "@/types/userDataType";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

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
