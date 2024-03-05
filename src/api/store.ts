import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "@/api/modal/modalSlice";
import userDataReducer from "@/api/userDataSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		userData: userDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
