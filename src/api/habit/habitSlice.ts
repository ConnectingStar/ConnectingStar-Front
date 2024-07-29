import { createSlice } from "@reduxjs/toolkit";

import {
	getHabit,
	getHabitHistoryList,
	getHabitRecord,
	editHabit,
	getHabitRecordOneDay,
} from "@/api/habit//habitThunk";

import type { HabitInitialStateType } from "@/types/habit";

const initialState: HabitInitialStateType = {
	habitHistoryList: [],
	habit: null,
	habitRecord: null,
	habitRecordOneDay: [],
};

const habitSlice = createSlice({
	name: "habit",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getHabitHistoryList.fulfilled, (state, action) => {
				state.habitHistoryList = action.payload.list;
			})
			.addCase(getHabit.fulfilled, (state, action) => {
				state.habit = action.payload.data;
			})
			.addCase(editHabit.fulfilled, (state, action) => {
				state.habit = { ...action.meta.arg, runHabitId: action.meta.arg.runHabitId };
			})
			.addCase(getHabitRecord.fulfilled, (state, action) => {
				state.habitRecord = action.payload.data.history;
			})
			.addCase(getHabitRecordOneDay.fulfilled, (state, action) => {
				state.habitRecordOneDay = action.payload.data;
			});
	},
});

export const habitReducer = habitSlice.reducer;
