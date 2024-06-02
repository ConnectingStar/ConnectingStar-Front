import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getStarCard = createAsyncThunk(
	"star/getStarCard",
	async ({ id, isRegistered }: { id: string; isRegistered: boolean }, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.STAR_CARD(id, isRegistered));
			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getStarCardDetail = createAsyncThunk(
	"star/getStarCardDetail",
	async (id: string, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.STAR_DETAIL(id));
			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
