import { useCallback, useState } from "react";

import { createHabit } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import type { HabitRequestType } from "@/types/habit";

export const useHabitForm = () => {
	const dispatch = useAppDispatch();

	const [habitRequest, setHabitRequest] = useState({
		identity: "",
		runTime: { noon: "", hour: "", minute: "" },
		place: "",
		behavior: "",
		behaviorValue: "",
		behaviorUnit: "",
		firstAlert: { noon: "", hour: "", minute: "" },
		secondAlert: { noon: "", hour: "", minute: "" },
	});

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
			await dispatch(createHabit(habitRequest)).unwrap();
			dispatch(openModal(modalType.HABIT_GENERATE));
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRequest, updateInputValue, handleSubmit };
};
