import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "@/api/auth/authSlice";
import { habitReducer } from "@/api/habit/habitSlice";
import { modalReducer } from "@/api/modal/modalSlice";
import { starReducer } from "@/api/star/starSlice";
import { toastReducer } from "@/api/toast/toastSlice";
import { userReducer } from "@/api/user/userSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
		toast: toastReducer,
		auth: authReducer,
		habit: habitReducer,
		star: starReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
