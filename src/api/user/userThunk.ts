import { onboardingUserDataType, userType } from "@/types/userDataType";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getIsOnboarding = createAsyncThunk("user/getIsOnboarding", async (_, thunkOptions) => {
	try {
		const { data } = await axiosInstance.get(END_POINTS.IS_ONBOARDING);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const postOnboarding = createAsyncThunk(
	"user/postOnboarding",
	async (userData: onboardingUserDataType, thunkAPI) => {
		try {
			const { data } = await axiosInstance.post<userType>(END_POINTS.ONBOARDING, userData);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
