import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { createHabitV2 } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
// import { PATH } from "@/constants/path";

import type { HabitRequestV2Type } from "@/types/habit";

interface UseHabitFormProps {
	isOnboarding?: boolean;
	habitId?: number;
	initialData?: HabitRequestV2Type | null;
}

export const useHabitForm = ({ isOnboarding, habitId, initialData }: UseHabitFormProps) => {
	const dispatch = useAppDispatch();

	// const navigate = useNavigate();

	const [habitRequest, setHabitRequest] = useState(
		initialData ?? {
			identity: "",
			runTime: "",
			place: "",
			action: "",
			value: null,
			unit: "",
			firstAlert: "",
			secondAlert: "",
			isOnboarding,
		},
	);

	const isEmpty =
		habitRequest.identity === "" ||
		habitRequest.runTime === "" ||
		habitRequest.place === "" ||
		habitRequest.action === "" ||
		habitRequest.value === null ||
		habitRequest.unit === "" ||
		habitRequest.firstAlert === "" ||
		habitRequest.secondAlert === "";

	const updateInputValue = useCallback(
		<Key extends keyof HabitRequestV2Type>(key: Key, value: HabitRequestV2Type[Key]) => {
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
				await dispatch(createHabitV2(habitRequest)).unwrap();
				dispatch(openModal(modalType.SUCCESS_GUIDE));
			}

			// else {
			// 	await dispatch(editHabit(habitRequest)).unwrap();
			// 	navigate(PATH.HOME);
			// }
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRequest, isEmpty, updateInputValue, handleSubmit };
};
