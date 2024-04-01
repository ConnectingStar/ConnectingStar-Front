import { userType, basicUserDataType, habitUserDataType } from "@/types/userDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: userType = {
	nickName: "",
	gender: "",
	age: "",
	findRoute: "",
	habit: "",
	identity: "",
	time: "",
	location: "",
	behavior: "",
	alert1: "",
	alert2: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updataBasicUserData: (state, action: PayloadAction<basicUserDataType>) => {
			const { nickName, gender, age } = action.payload;
			state.nickName = nickName;
			state.gender = gender;
			state.age = age;
		},
		updataHabitUserData: (state, action: PayloadAction<habitUserDataType>) => {
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

export const { updataBasicUserData, updataHabitUserData } = userSlice.actions;
export default userSlice.reducer;
