import { createSlice } from "@reduxjs/toolkit";

import { getHabit, getHabitHistoryList, getProgressHabitList } from "@/api/habit//habitThunk";

import type { HabitInitialStateType } from "@/types/habit";

const initialState: HabitInitialStateType = {
	progressHabitList: [],
	habitHistoryList: [],
	habit: null,
};

const habitSlice = createSlice({
	name: "habit",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getProgressHabitList.fulfilled, (state, action) => {
				state.progressHabitList = action.payload.list;
			})
			.addCase(getHabitHistoryList.fulfilled, (state, action) => {
				state.habitHistoryList = action.payload.list;
			})
			.addCase(getHabit.fulfilled, (state, action) => {
				state.habit = action.payload.data;
			});
	},
});

export const habitReducer = habitSlice.reducer;
