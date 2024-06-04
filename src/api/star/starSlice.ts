import { StarDataType } from "@/types/star";
import { createSlice } from "@reduxjs/toolkit";

import {
	getStarMain,
	getStarCardDetail,
	getStarCard,
	addStarToConstellation,
} from "@/api/star/starThunk";
import { editProfileImage } from "@/api/user/userThunk";

import { STAR_DETAIL_STATUS } from "@/constants/starPageConstants";

const initialState: StarDataType = {
	isLoading: false,
	starMain: {
		starCount: 0,
		name: "",
		svg: {
			fill: "",
			stroke: "",
			strokeWidth: 0,
			opacity: 0,
			width: 0,
			height: 0,
			viewBox: "",
			path: "",
			circleList: [],
		},
		isProgress: false,
	},
	starCard: {
		list: [],
		count: 0,
	},
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
			.addCase(getStarMain.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarMain.fulfilled, (state, action) => {
				state.isLoading = false;
				state.starMain = action.payload.data;
			})
			.addCase(getStarMain.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getStarCard.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarCard.fulfilled, (state, action) => {
				state.isLoading = false;
				state.starCard = action.payload;
			})
			.addCase(getStarCard.rejected, (state) => {
				state.isLoading = false;
			})
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
			})
			.addCase(addStarToConstellation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addStarToConstellation.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(addStarToConstellation.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const starReducer = starSlice.reducer;
