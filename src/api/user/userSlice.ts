import { userType, basicUserDataType, habitUserDataType } from "@/types/userDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: userType = {
	nickName: "",
	gender: "",
	age: "",
	visitorRoute: "",
	habit: "",
	identity: "",
	time: { noon: "오전", hour: "10", minute: "00" },
	location: "",
	behavior: "",
	alert1: { noon: "오전", hour: "09", minute: "50" },
	alert2: { noon: "오전", hour: "10", minute: "10" },
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateBasicUserData: (state, action: PayloadAction<basicUserDataType>) => {
			const { nickName, gender, age } = action.payload;
			state.nickName = nickName;
			state.gender = gender;
			state.age = age;
		},
		updateVisitorRoute: (state, action: PayloadAction<string>) => {
			state.visitorRoute = action.payload;
		},
		updateHabitUserData: (state, action: PayloadAction<habitUserDataType>) => {
			state.habit = action.payload.habit ?? state.habit;
			state.identity = action.payload.identity ?? state.identity;
			state.time = action.payload.time ?? state.time;
			state.location = action.payload.location ?? state.location;
			state.behavior = action.payload.behavior ?? state.behavior;
			state.alert1 = action.payload.alert1 ?? state.alert1;
			state.alert2 = action.payload.alert2 ?? state.alert2;
		},
	},
});

export const { updateBasicUserData, updateVisitorRoute, updateHabitUserData } = userSlice.actions;
export default userSlice.reducer;
