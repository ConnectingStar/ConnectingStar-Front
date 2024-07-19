import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type {
	HabitHistoryListRequest,
	HabitRequestType,
	HabitDeleteRequestType,
	HabitRecordRequestType,
	HabitRestRecordRequestType,
} from "@/types/habit";

export const createHabitRestRecord = createAsyncThunk(
	"habit/createHabitRestRecord",
	async (habitRestRecordRequest: HabitRestRecordRequestType, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.post(
				END_POINTS.HABIT_REST_RECORD,
				habitRestRecordRequest,
			);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const createHabitRecord = createAsyncThunk(
	"habit/createHabitRecord",
	async (habitRecordRequest: HabitRecordRequestType, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.post(END_POINTS.HABIT_HISTORY, habitRecordRequest);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getHabit = createAsyncThunk(
	"habit/getHabit",
	async (runHabitId: number, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.HABIT_ONE(runHabitId));

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
			return await authorizedAxiosInstance.delete(END_POINTS.HABIT, {
				data: { runHabitId, reason },
			});
		} catch (error) {
			thunkOptions.rejectWithValue(error);
		}
	},
);

export const editHabit = createAsyncThunk(
	"habit/editHabit",
	async (habitRequest: HabitRequestType, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.put(END_POINTS.HABIT, habitRequest);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const createHabit = createAsyncThunk(
	"habit/createHabit",
	async (habitRequest: HabitRequestType, thunkOptions) => {
		try {
			return await authorizedAxiosInstance.post(END_POINTS.HABIT, habitRequest);
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const getProgressHabitList = createAsyncThunk(
	"habit/getProgressHabitList",
	async (_, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.HABIT);

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
			const { data } = await authorizedAxiosInstance.get(
				END_POINTS.HABIT_HISTORY_LIST(runHabitId, increase, isRest),
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
