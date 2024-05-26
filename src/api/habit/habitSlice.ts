import { createSlice } from "@reduxjs/toolkit";

import { getHabitHistoryList, getProgressHabitList } from "@/api/habit//habitThunk";

const initialState = {
	progressHabitList: [],
	habitHistoryList: [],
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
			});
	},
});

export const habitReducer = habitSlice.reducer;
