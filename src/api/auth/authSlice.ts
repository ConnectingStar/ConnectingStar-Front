import { createSlice } from "@reduxjs/toolkit";

interface authStateType {
	isLogin: boolean | null;
	isLoading: boolean;
}

const initialState: authStateType = {
	isLogin: null,
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
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
