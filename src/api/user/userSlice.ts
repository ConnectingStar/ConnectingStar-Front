import { userType, basicUserDataType, habitUserDataType } from "@/types/userDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getIsOnboarding, postOnboarding } from "@/api/user/userThunk";

const initialState: userType = {
	nickname: "",
	genderType: "",
	ageRangeType: "",
	referrer: "",
	identity: "",
	runTime: { noon: "오전", hour: "10", minute: "00" },
	place: "",
	behavior: "",
	behaviorValue: 0,
	behaviorUnit: "",
	firstAlert: { noon: "오전", hour: "09", minute: "50" },
	secondAlert: { noon: "오전", hour: "10", minute: "10" },
	isLoading: false,
	isOnboarding: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateBasicUserData: (state, action: PayloadAction<basicUserDataType>) => {
			const { nickname, genderType, ageRangeType } = action.payload;
			state.nickname = nickname;
			state.genderType = genderType;
			state.ageRangeType = ageRangeType;
		},
		updateVisitorRoute: (state, action: PayloadAction<string>) => {
			state.referrer = action.payload;
		},
		updateHabitUserData: (state, action: PayloadAction<habitUserDataType>) => {
			state.identity = action.payload.identity ?? state.identity;
			state.runTime = action.payload.runTime ?? state.runTime;
			state.place = action.payload.place ?? state.place;
			state.behavior = action.payload.behavior ?? state.behavior;
			state.behaviorValue = action.payload.behaviorValue ?? state.behaviorValue;
			state.behaviorUnit = action.payload.behaviorUnit ?? state.behaviorUnit;
			state.firstAlert = action.payload.firstAlert ?? state.firstAlert;
			state.secondAlert = action.payload.secondAlert ?? state.secondAlert;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getIsOnboarding.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getIsOnboarding.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload.data.onboard);
				state.isOnboarding = action.payload.data.onboard;
			})
			.addCase(getIsOnboarding.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(postOnboarding.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(postOnboarding.fulfilled, (state) => {
				state.isLoading = false;
				state.isOnboarding = true;
			})
			.addCase(postOnboarding.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { updateBasicUserData, updateVisitorRoute, updateHabitUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
