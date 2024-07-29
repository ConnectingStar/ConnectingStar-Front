import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type {
	HabitRequestType,
	HabitDeleteRequestType,
	HabitRecordRequestType,
	HabitRestRecordRequestType,
} from "@/types/habit";

export const getHabitRecord = createAsyncThunk(
	"habit/getHabitRecord",
	async (habitHistoryId: number, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(
				END_POINTS.HABIT_HISTORY_ONE(habitHistoryId),
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

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

export const getHabitRecordOneDay = createAsyncThunk(
	"habit/getHabitRecordOneDay",
	async (date: string, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.get(END_POINTS.HABIT_RECORD_ONE_DAY(date));

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);
