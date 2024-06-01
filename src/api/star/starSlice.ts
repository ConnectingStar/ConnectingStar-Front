import { StarDataType } from "@/types/star";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getStarCardDetail } from "@/api/star/starThunk";

const initialState: StarDataType = {
	isLoading: false,
	starCardDetail: {
		constellationId: 0,
		typeName: "",
		name: "",
		story: "",
		identity: "",
		image: "",
		starCount: 0,
		status: "SELECT",
		isProfile: false,
	},
};

const starSlice = createSlice({
	name: "starCardDetail",
	initialState,
	reducers: {
		updateIsProfile: (state, action: PayloadAction<{ isProfile: boolean }>) => {
			state.starCardDetail.isProfile = action.payload.isProfile;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getStarCardDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarCardDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.starCardDetail = action.payload.data;
			})
			.addCase(getStarCardDetail.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { updateIsProfile } = starSlice.actions;
export const starReducer = starSlice.reducer;
