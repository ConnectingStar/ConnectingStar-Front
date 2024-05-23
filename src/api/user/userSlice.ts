import { userType, basicUserDataType, habitUserDataType } from "@/types/userDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
	getIsOnboarding,
	postOnboarding,
	getUserConstellationList,
	getUserInfo,
	editNickName,
} from "@/api/user/userThunk";

const initialState: userType = {
	userData: {
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
	},
	isLoading: false,
	isOnboarding: false,
	constellation: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateBasicUserData: (state, action: PayloadAction<basicUserDataType>) => {
			const { nickname, genderType, ageRangeType } = action.payload;
			state.userData.nickname = nickname;
			state.userData.genderType = genderType;
			state.userData.ageRangeType = ageRangeType;
		},
		updateVisitorRoute: (state, action: PayloadAction<string>) => {
			state.userData.referrer = action.payload;
		},
		updateHabitUserData: (state, action: PayloadAction<habitUserDataType>) => {
			state.userData.identity = action.payload.identity ?? state.userData.identity;
			state.userData.runTime = action.payload.runTime ?? state.userData.runTime;
			state.userData.place = action.payload.place ?? state.userData.place;
			state.userData.behavior = action.payload.behavior ?? state.userData.behavior;
			state.userData.behaviorValue = action.payload.behaviorValue ?? state.userData.behaviorValue;
			state.userData.behaviorUnit = action.payload.behaviorUnit ?? state.userData.behaviorUnit;
			state.userData.firstAlert = action.payload.firstAlert ?? state.userData.firstAlert;
			state.userData.secondAlert = action.payload.secondAlert ?? state.userData.secondAlert;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getIsOnboarding.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getIsOnboarding.fulfilled, (state, action) => {
				state.isLoading = false;
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
			})
			.addCase(postOnboarding.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getUserConstellationList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserConstellationList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.constellation = action.payload.list;
			})
			.addCase(getUserConstellationList.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload.data;
			})
			.addCase(editNickName.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
			});
	},
});

export const { updateBasicUserData, updateVisitorRoute, updateHabitUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
