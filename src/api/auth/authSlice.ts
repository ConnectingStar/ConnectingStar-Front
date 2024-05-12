import { createSlice } from "@reduxjs/toolkit";

import { getIsOnboarding } from "@/api/auth/authThunk";

interface authStateType {
	isLogin: boolean | null;
	isOnboarding: boolean | null;
	isLoading: boolean;
}

const initialState: authStateType = {
	isLogin: null,
	isOnboarding: null,
	isLoading: true,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		logout: (state) => {
			state.isLogin = false;
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
			});
	},
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
