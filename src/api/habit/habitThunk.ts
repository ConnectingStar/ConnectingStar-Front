import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { HabitHistoryListRequest } from "@/types/habit";

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

export const getHabitHistoryList = createAsyncThunk(
	"habit/getHabitHistoryList",
	async ({ runHabitId, increase, isRest }: HabitHistoryListRequest, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(
				END_POINTS.HABIT_HISTORY_LIST(runHabitId, increase, isRest),
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
