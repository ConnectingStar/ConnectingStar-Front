import { createSlice } from "@reduxjs/toolkit";

import { getProgressHabitList } from "@/api/habit//habitThunk";

const initialState = {
	progressHabitList: "",
};

const habitSlice = createSlice({
	name: "habit",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getProgressHabitList.fulfilled, (state, action) => {
			state.progressHabitList = action.payload.list;
			console.log(action.payload);
		});
	},
});

export const habitReducer = habitSlice.reducer;
