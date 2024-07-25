import { userType } from "@/types/userDataType";
import { createSlice } from "@reduxjs/toolkit";

import {
	getIsOnboarding,
	postOnboarding,
	getUserInfo,
	getUserIdentity,
	editNickname,
	editGender,
	editAge,
	editIdentity,
	selectStar,
	getOnlyUserInfo,
	getUserInfoV2,
	editProfileImageV2,
	getUserConstellationListV2,
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
			.addCase(selectStar.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(selectStar.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(selectStar.rejected, (state) => {
				state.isLoading = false;
			})

			.addCase(getUserConstellationListV2.fulfilled, (state, action) => {
				state.isLoading = false;
				state.constellationList = action.payload.data.userConstellationAndStatusList;
			})

			.addCase(getUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload.data;
			})
			.addCase(editNickname.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userInfo) {
					state.userInfo.nickname = action.meta.arg;
				}
			})
			.addCase(editGender.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userInfo) {
					state.userInfo.gender = action.meta.arg;
				}
			})
			.addCase(editAge.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userInfo) {
					state.userInfo.ageRange = action.meta.arg;
				}
			})
			.addCase(editIdentity.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userInfo) {
					state.userInfo.identity = action.meta.arg;
				}
			})
			.addCase(editProfileImageV2.fulfilled, (state, action) => {
				state.isLoading = false;
				if (state.userInfo) {
					state.userInfo.constellation = action.payload.data.user.constellation;
				}
			})
			.addCase(getUserIdentity.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userIdentityList = action.payload.data;
			})
			.addCase(getOnlyUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload.data.user;
			})
			.addCase(getUserInfoV2.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userInfo = action.payload.data.user;
			});
	},
});

export const userReducer = userSlice.reducer;
