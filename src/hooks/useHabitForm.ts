import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createHabit, editHabit } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";

import type { HabitRequestType } from "@/types/habit";

interface UseHabitFormProps {
	habitId?: number;
	initialData?: HabitRequestType | null;
}

export const useHabitForm = ({ habitId, initialData }: UseHabitFormProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [habitRequest, setHabitRequest] = useState(
		initialData ?? {
			identity: "",
			runTime: { noon: "", hour: "", minute: "" },
			place: "",
			behavior: "",
			behaviorValue: "",
			behaviorUnit: "",
			firstAlert: { noon: "", hour: "", minute: "" },
			secondAlert: { noon: "", hour: "", minute: "" },
		},
	);

	const isEmpty =
		habitRequest.identity === "" ||
		habitRequest.runTime.noon === "" ||
		habitRequest.runTime.hour === "" ||
		habitRequest.runTime.minute === "" ||
		habitRequest.place === "" ||
		habitRequest.behavior === "" ||
		habitRequest.behaviorValue === "" ||
		habitRequest.behaviorUnit === "" ||
		habitRequest.firstAlert.noon === "" ||
		habitRequest.firstAlert.hour === "" ||
		habitRequest.firstAlert.minute === "" ||
		habitRequest.secondAlert.noon === "" ||
		habitRequest.secondAlert.hour === "" ||
		habitRequest.secondAlert.minute === "";

	const updateInputValue = useCallback(
		<Key extends keyof HabitRequestType>(key: Key, value: HabitRequestType[Key]) => {
			setHabitRequest((prevHabitRequest) => {
				const data = {
					...prevHabitRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSubmit = async () => {
		try {
			if (!habitId) {
				await dispatch(createHabit(habitRequest)).unwrap();
				dispatch(openModal(modalType.HABIT_GENERATE));
			} else {
				await dispatch(editHabit(habitRequest)).unwrap();
				navigate(PATH.HOME);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRequest, isEmpty, updateInputValue, handleSubmit };
};
