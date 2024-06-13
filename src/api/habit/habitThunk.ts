import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type {
	HabitHistoryListRequest,
	HabitRequestType,
	HabitDeleteRequestType,
} from "@/types/habit";

export const getHabit = createAsyncThunk(
	"habit/getHabit",
	async (runHabitId: number, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.HABIT_ONE(runHabitId));

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const deleteHabit = createAsyncThunk(
	"habit/deleteHabit",
	async ({ runHabitId, reason }: HabitDeleteRequestType, thunkOptions) => {
		try {
			return await axiosInstance.delete(END_POINTS.HABIT, { data: { runHabitId, reason } });
		} catch (error) {
			thunkOptions.rejectWithValue(error);
		}
	},
);

export const editHabit = createAsyncThunk(
	"habit/editHabit",
	async (habitRequest: HabitRequestType, thunkOptions) => {
		try {
			return await axiosInstance.put(END_POINTS.HABIT, habitRequest);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const createHabit = createAsyncThunk(
	"habit/createHabit",
	async (habitRequest: HabitRequestType, thunkOptions) => {
		try {
			return await axiosInstance.post(END_POINTS.HABIT, habitRequest);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getProgressHabitList = createAsyncThunk(
	"habit/getProgressHabitList",
	async (_, thunkOptions) => {
		try {
			const { data } = await axiosInstance.get(END_POINTS.HABIT);

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
