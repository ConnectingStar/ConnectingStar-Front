import { StarDataType } from "@/types/star";
import { createSlice } from "@reduxjs/toolkit";

import { getStarCardDetail } from "@/api/star/starThunk";
import { editProfileImage } from "@/api/user/userThunk";

import { STAR_DETAIL_STATUS } from "@/constants/starPageConstants";

const initialState: StarDataType = {
	isLoading: false,
	starDetail: {
		constellationId: 0,
		typeName: "",
		name: "",
		story: "",
		identity: "",
		image: "",
		starCount: 0,
		status: STAR_DETAIL_STATUS.SELECT,
		isProfile: false,
	},
};

const starSlice = createSlice({
	name: "star",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getStarCardDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarCardDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.starDetail = action.payload.data;
			})
			.addCase(getStarCardDetail.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(editProfileImage.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editProfileImage.fulfilled, (state) => {
				state.isLoading = false;
				state.starDetail.isProfile = true;
			})
			.addCase(editProfileImage.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const starReducer = starSlice.reducer;
