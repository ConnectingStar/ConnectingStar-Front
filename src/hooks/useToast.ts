import { useCallback } from "react";

import { useAppDispatch } from "@/api/hooks";
import { addToast } from "@/api/toast/toastSlice";
import type { ToastType } from "@/api/toast/toastSlice";

export const useToast = () => {
	const dispatch = useAppDispatch();

	const createToast = useCallback(
		(message: string, variant: ToastType["variant"] = "default") => {
			const newToast = { id: Number(new Date()), variant, message };

			dispatch(addToast(newToast));
		},
		[addToast],
	);

	return { createToast };
};
