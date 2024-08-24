import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizedAxiosInstance } from "@/api/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type {
	HabitDeleteRequestType,
	HabitRecordRequestType,
	HabitRestRecordRequestType,
	HabitRequestV2Type,
	HabitHistoryRequestType,
} from "@/types/habit";

interface EditHabitRequestType {
	runHabitId?: string;
	habitRequest: HabitRequestV2Type;
}

export const getHabitList = createAsyncThunk("habit/getHabitList", async (_, thunkOptions) => {
	try {
		const { data } = await authorizedAxiosInstance.get(END_POINTS.HABIT);

		return data;
	} catch (error) {
		throw thunkOptions.rejectWithValue(error);
	}
});

export const getHabitRecordList = createAsyncThunk(
	"habit/getHabitRecordList",
	async (
		{ runHabitId, isRest, page, size, sortBy, sortOrder, related }: HabitHistoryRequestType,
		thunkOptions,
	) => {
		try {
			const { data } = await authorizedAxiosInstance.get(
				END_POINTS.HABIT_HISTORY_LIST({
					runHabitId,
					isRest,
					page,
					size,
					sortBy,
					sortOrder,
					related,
				}),
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

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
			const { data } = await authorizedAxiosInstance.get(END_POINTS.HABIT_WITH_ALERT(runHabitId));

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
			return await authorizedAxiosInstance.delete(END_POINTS.HABIT_ID(runHabitId), {
				data: { reasonOfQuit: reason },
			});
		} catch (error) {
			thunkOptions.rejectWithValue(error);
		}
	},
);

export const editHabit = createAsyncThunk(
	"habit/editHabit",
	async ({ runHabitId, habitRequest }: EditHabitRequestType, thunkOptions) => {
		try {
			const { data } = await authorizedAxiosInstance.patch(
				END_POINTS.HABIT_ID(runHabitId),
				habitRequest,
			);

			return data;
		} catch (error) {
			throw thunkOptions.rejectWithValue(error);
		}
	},
);

export const createHabitV2 = createAsyncThunk(
	"habit/createHabitV2",
	async (habitRequest: HabitRequestV2Type, thunkOptions) => {
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
