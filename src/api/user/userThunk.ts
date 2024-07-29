import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance, axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { OnboardingUserInfoType } from "@/types/user";

interface EditProfileImageRequestType {
	constellationId: string;
	related?: string;
}

interface GetUserConstellationListRequestType {
	constellationTypeId?: string;
	isRegistered?: boolean;
	related?: string;
}

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

export const getOnlyUserInfo = createAsyncThunk("user/getOnlyUserInfo", async (_, thunkOptions) => {
	try {
		const { data } = await authorizedAxiosInstance.get(END_POINTS.ONLY_USER_INFO);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const getUserInfoV2 = createAsyncThunk("user/getUserInfoV2", async (_, thunkOptions) => {
	try {
		const { data } = await authorizedAxiosInstance.get(END_POINTS.USER_INFO_V2);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const getIsOnboarding = createAsyncThunk("user/getIsOnboarding", async (_, thunkOptions) => {
	try {
		const { data } = await axiosInstance.get(END_POINTS.IS_ONBOARDING);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const postOnboardingUserInfo = createAsyncThunk(
	"user/postOnboardingUserInfo",
	async (userInfo: OnboardingUserInfoType, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.patch(END_POINTS.ONBOARDING_V2, userInfo);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getUserConstellationListV2 = createAsyncThunk(
	"user/getUserConstellationListV2",
	async (
		{ constellationTypeId, isRegistered, related }: GetUserConstellationListRequestType,
		thunkOptions,
	) => {
		try {
			const { data } = await authorizedAxiosInstance.get(
				END_POINTS.CONSTELLATION_LIST_V2(constellationTypeId, isRegistered, related),
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const editProfileImageV2 = createAsyncThunk(
	"user/editProfileImageV2",
	async ({ constellationId, related }: EditProfileImageRequestType, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.patch(END_POINTS.USER_CONSTELLATION_V2, {
				constellationId,
				response: {
					related: [related],
				},
			});

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

export const addStar = createAsyncThunk("star/addStar", async (_, thunkOptions) => {
	try {
		const { data } = await authorizedAxiosInstance.put(END_POINTS.ADD_STAR);
		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});
