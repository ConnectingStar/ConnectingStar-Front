import { createSlice } from "@reduxjs/toolkit";

import { getHabitHistoryList, getProgressHabitList } from "@/api/habit//habitThunk";

const initialState = {
	progressHabitList: [],
	habitHistoryList: [],
	// newHabitData: {
	// 	identity: "",
	// 	runTime: { noon: "오전", hour: "10", minute: "00" },
	// 	place: "",
	// 	behavior: "",
	// 	behaviorValue: 0,
	// 	behaviorUnit: "",
	// 	firstAlert: { noon: "오전", hour: "09", minute: "50" },
	// 	secondAlert: { noon: "오전", hour: "10", minute: "10" },
	// },
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
