import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance, authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SocialType } from "@/types/user";

interface WithdrawalRequestType {
	reason: string;
	content: string;
	deletedDt: string;
}

interface SocialLoginProps {
	authCode: string;
	socialType: SocialType;
}

export const socialLogIn = createAsyncThunk(
	"auth/logIn",
	async ({ authCode, socialType }: SocialLoginProps, thunkOptions) => {
		try {
			const { data } = await axiosInstance.post(END_POINTS.LOGIN, { socialType, authCode });

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

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
