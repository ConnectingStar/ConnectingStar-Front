import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type modalType = "auth" | null;

interface initialStateType {
	modal: modalType;
}

const initialState: initialStateType = {
	modal: null,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<modalType>) => {
			state.modal = action.payload;
		},
		closeModal: (state) => {
			state.modal = null;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
