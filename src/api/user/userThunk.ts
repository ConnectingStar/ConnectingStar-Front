import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ConstellationListType } from "@/types/user";
import type { UserDataType, onboardingUserDataType } from "@/types/userDataType";

export const getUserInfoWithHabit = createAsyncThunk(
	"user/getUserInfoWithHabit",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.USER_INFO_WITH_HABIT);

			return { data };
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getUserInfo = createAsyncThunk<UserDataType>(
	"user/getUserInfo",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.USER_INFO);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

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
			const { data } = await axiosInstance.post<onboardingUserDataType>(
				END_POINTS.ONBOARDING,
				userData,
			);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const getUserConstellationList = createAsyncThunk<ConstellationListType>(
	"user/getUserConstellationList",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.CONSTELLATION_LIST);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
