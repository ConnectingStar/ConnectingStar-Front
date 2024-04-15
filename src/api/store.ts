import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "@/api/modal/modalSlice";
import { toastReducer } from "@/api/toast/toastSlice";
import userReducer from "@/api/user/userSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
		toast: toastReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
