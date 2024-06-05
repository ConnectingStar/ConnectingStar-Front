import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getStarMain = createAsyncThunk("star/getStarMain", async (_, thunkOptions) => {
	try {
		const { data } = await axiosInstance.get(END_POINTS.STAR_MAIN);
		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const addStarToConstellation = createAsyncThunk(
	"star/addStarToConstellation",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.put(END_POINTS.ADD_STAR_TO_CONSTELLATION);
			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getStarCard = createAsyncThunk(
	"star/getStarCard",
	async ({ id, isRegistered }: { id: string; isRegistered: boolean }, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.STAR_CARD(id, isRegistered));
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
			const { data } = await authorizedAxiosInstance.get(END_POINTS.STAR_DETAIL(id));
			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
