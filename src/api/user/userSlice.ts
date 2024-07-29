import { UserStateType } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

import {
	getIsOnboarding,
	getUserIdentity,
	editNickname,
	editGender,
	editAge,
	editIdentity,
	getOnlyUserInfo,
	getUserInfoV2,
	editProfileImageV2,
	getUserConstellationListV2,
} from "@/api/user/userThunk";

const initialState: UserStateType = {
	userProfile: null,
	userInfo: null,
	isLoading: false,
	isOnboarding: false,
	userIdentityList: [],
	constellationList: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getIsOnboarding.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isOnboarding = action.payload.data.onboard;
			})

			.addCase(getUserConstellationListV2.fulfilled, (state, action) => {
				state.isLoading = false;
				state.constellationList = action.payload.data.userConstellationAndStatusList;
			})
			.addCase(editNickname.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userProfile) {
					state.userProfile.user.nickname = action.meta.arg;
				}
			})
			.addCase(editGender.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userProfile) {
					state.userProfile.user.gender = action.meta.arg;
				}
			})
			.addCase(editAge.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userProfile) {
					state.userProfile.user.ageRange = action.meta.arg;
				}
			})
			.addCase(editIdentity.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userProfile) {
					state.userProfile.user.identity = action.meta.arg;
				}
			})
			.addCase(editProfileImageV2.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userProfile) {
					state.userProfile.user.constellation = action.payload.data.user.constellation;
				}
			})
			.addCase(getUserIdentity.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userIdentityList = action.payload.data;
			})
			.addCase(getOnlyUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userInfo = action.payload.data.user;
			})
			.addCase(getUserInfoV2.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userProfile = action.payload.data;
			});
	},
});

export const userReducer = userSlice.reducer;
