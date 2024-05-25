import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getProgressHabitList = createAsyncThunk(
	"habit/getProgressHabitList",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.PROGRESS_HABIT_LIST);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
