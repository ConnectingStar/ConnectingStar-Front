import { userDataType, basicUserDataType, habitUserDataType } from "@/types/userDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//TODO: nickName, gender, age, findRoute 초기값 ""로 만들기
const initialState: userDataType = {
	nickName: "갓용주",
	gender: "남",
	age: "25-29",
	findRoute: "지인 추천",
	habit: "",
	identity: "",
	time: "오후 10:00",
	location: "",
	behavior: "",
	alert1: "오후 09:50",
	alert2: "오후 10:10",
};

const userDataSlice = createSlice({
	name: "userDate",
	initialState,
	reducers: {
		updataBasicUserData: (state, action: PayloadAction<basicUserDataType>) => {
			const { nickName, gender, age, findRoute } = action.payload;
			state.nickName = nickName;
			state.gender = gender;
			state.age = age;
			state.findRoute = findRoute;
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

export const { updataBasicUserData, updataHabitUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
