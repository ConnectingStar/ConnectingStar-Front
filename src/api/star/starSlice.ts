import { StarDataType } from "@/types/star";
import { createSlice } from "@reduxjs/toolkit";

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
	},
};

const starSlice = createSlice({
	name: "starCardDetail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getStarCardDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStarCardDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action);
				state.starCardDetail = action.payload.data;
			})
			.addCase(getStarCardDetail.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const starReducer = starSlice.reducer;
