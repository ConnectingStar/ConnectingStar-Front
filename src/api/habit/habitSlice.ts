import { createSlice } from "@reduxjs/toolkit";

import {
	getHabit,
	getHabitRecord,
	editHabit,
	getHabitRecordOneDay,
	getHabitList,
	getHabitRecordList,
} from "@/api/habit//habitThunk";

import type { HabitInitialStateType } from "@/types/habit";

const initialState: HabitInitialStateType = {
	habit: null,
	habitRecord: null,
	habitRecordOneDay: [],
	habitList: null,
	habitRecordList: null,
	isHabitLoading: false,
};

const habitSlice = createSlice({
	name: "habit",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getHabit.pending, (state) => {
				state.isHabitLoading = true;
			})
			.addCase(getHabit.fulfilled, (state, action) => {
				state.habit = action.payload.data.runHabit;
				state.isHabitLoading = false;
			})
			.addCase(getHabit.rejected, (state) => {
				state.isHabitLoading = false;
			})
			.addCase(editHabit.fulfilled, (state, action) => {
				state.habit = { ...action.payload.data.runHabit };
			})
			.addCase(getHabitRecord.fulfilled, (state, action) => {
				state.habitRecord = action.payload.data.history;
			})
			.addCase(getHabitRecordOneDay.fulfilled, (state, action) => {
				state.habitRecordOneDay = action.payload.data;
			})
			.addCase(getHabitList.fulfilled, (state, action) => {
				state.habitList = action.payload.data.runHabits;
			})
			.addCase(getHabitRecordList.fulfilled, (state, action) => {
				state.habitRecordList = action.payload.data.histories;
			});
	},
});

export const habitReducer = habitSlice.reducer;
