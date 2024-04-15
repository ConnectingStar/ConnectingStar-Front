import { createSlice } from "@reduxjs/toolkit";

export interface ToastType {
	id: number;
	variant?: "default" | "success" | "error";
	message: string;
	hasCloseButton?: boolean;
	showDuration?: number;
}

interface initialStateType {
	toastList: ToastType[];
}

const initialState: initialStateType = {
	toastList: [],
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		addToast: (state, action) => {
			state.toastList.push(action.payload);
		},
		deleteToast: (state, action) => {
			state.toastList = state.toastList.filter((toast) => toast.id !== action.payload);
		},
	},
});

export const { addToast, deleteToast } = toastSlice.actions;

export const toastReducer = toastSlice.reducer;
