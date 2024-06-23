import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance, axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ConstellationListType } from "@/types/user";
import type { UserDataType, onboardingUserDataType } from "@/types/userDataType";

export const editIdentity = createAsyncThunk(
	"user/editIdentity",
	async (identity: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.EDIT_IDENTITY, { identity });
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const editAge = createAsyncThunk(
	"user/editAge",
	async (ageRangeType: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.EDIT_AGE, { ageRangeType });
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const editGender = createAsyncThunk(
	"user/editGender",
	async (genderType: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.EDIT_GENDER, { genderType });
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const editNickname = createAsyncThunk(
	"user/editNickname",
	async (nickname: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.EDIT_NICKNAME, { nickname });
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getUserIdentity = createAsyncThunk("user/getUserIdentity", async (_, thunkOptions) => {
	try {
		const { data } = await authorizedAxiosInstance.get(END_POINTS.USER_IDENTITY);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const getUserInfoWithHabit = createAsyncThunk(
	"user/getUserInfoWithHabit",
	async (_, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.USER_INFO_WITH_HABIT);

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
			const { data } = await authorizedAxiosInstance.get(END_POINTS.USER_INFO);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getIsOnboarding = createAsyncThunk("user/getIsOnboarding", async (_, thunkOptions) => {
	try {
		const { data } = await axiosInstance.get(END_POINTS.IS_ONBOARDING);

		console.log(data);
		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const postOnboarding = createAsyncThunk(
	"user/postOnboarding",
	async (userData: onboardingUserDataType, thunkAPI) => {
		try {
			const { data } = await authorizedAxiosInstance.post<onboardingUserDataType>(
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
			const { data } = await authorizedAxiosInstance.get(END_POINTS.CONSTELLATION_LIST);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const editProfileImage = createAsyncThunk(
	"user/editProfileImage",
	async (constellationId: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.USER_CONSTELLATION, { constellationId });
		} catch (error) {
			return thunkOptions.rejectWithValue(error);
		}
	},
);

export const selectStar = createAsyncThunk(
	"user/selectStar",
	async (constellationId: string, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.post(END_POINTS.USER_CONSTELLATION, { constellationId });
		} catch (error) {
			return thunkOptions.rejectWithValue(error);
		}
	},
);
