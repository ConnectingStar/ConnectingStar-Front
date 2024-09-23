import { createSlice } from "@reduxjs/toolkit";

import {
	getHabit,
	getHabitRecord,
	editHabit,
	getHabitRecordOneDay,
	getHabitList,
	getHabitRecordList,
	getHabitListWithStatus,
	getHabitListIsEnd,
	deleteEndHabit,
	getHabitStatistics,
	getHabitListWithStat,
} from "@/api/habit//habitThunk";

import type { HabitInitialStateType } from "@/types/habit";

const initialState: HabitInitialStateType = {
	habit: null,
	habitRecord: null,
	habitRecordOneDay: [],
	habitList: null,
	habitRecordList: null,
	isHabitLoading: false,
	habitListWithStatus: null,
	habitListIsEnd: null,
	habitStatistics: null,
	habitListWithStat: null,
};

const habitSlice = createSlice({
	name: "habit",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getHabitListWithStat.fulfilled, (state, action) => {
				state.habitListWithStat = action.payload.data.histories;
			})
			.addCase(getHabitStatistics.fulfilled, (state, action) => {
				state.habitStatistics = action.payload.data;
			})
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
			})
			.addCase(getHabitListWithStatus.fulfilled, (state, action) => {
				state.habitListWithStatus = action.payload.data.runHabits;
			})
			.addCase(getHabitListIsEnd.fulfilled, (state, action) => {
				state.habitListIsEnd = action.payload.data.quitHabits;
			})
			.addCase(deleteEndHabit.fulfilled, (state, action) => {
				if (!state.habitListIsEnd) return;

				state.habitListIsEnd = state.habitListIsEnd.filter(
					(data) => data.quitHabitId !== action.meta.arg,
				);
			});
	},
});

export const habitReducer = habitSlice.reducer;
