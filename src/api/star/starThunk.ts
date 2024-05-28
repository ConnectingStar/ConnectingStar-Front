import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getStarCardDetail = createAsyncThunk(
	"star/getStarCardDetail",
	async (id: string, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.STAR_CARD_DETAIL(id));
			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
