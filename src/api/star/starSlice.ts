import { StarDataType } from "@/types/star";
import { createSlice } from "@reduxjs/toolkit";

import { getStarMain, getStarDetail, getStarCard } from "@/api/star/starThunk";
import { editProfileImage, addStar } from "@/api/user/userThunk";

import { STAR_DETAIL_STATUS } from "@/constants/starPageConstants";

import { findCircleIndex } from "@/utils/starUtils";

const initialState: StarDataType = {
	isLoading: false,
	starMain: {
		constellationId: 0,
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
	addStarResult: {
		isRegistered: false,
		mainImage: "",
		characterImage: "",
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

				if (state.addStarResult.isRegistered) {
					state.addStarResult.isRegistered = false;
					state.addStarResult.mainImage = "";
					state.addStarResult.characterImage = "";
				}
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
			.addCase(getStarDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.starDetail = action.payload.data;
			})
			.addCase(getStarDetail.rejected, (state) => {
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
			.addCase(addStar.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addStar.fulfilled, (state, action) => {
				state.isLoading = false;

				if (!state.addStarResult.isRegistered) {
					state.starMain.starCount = state.starMain.starCount - 1;
					const index = findCircleIndex(state.starMain.svg.circleList);
					state.starMain.svg.circleList[index].filled = true;
				}

				state.addStarResult = action.payload.data;
			})
			.addCase(addStar.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const starReducer = starSlice.reducer;
