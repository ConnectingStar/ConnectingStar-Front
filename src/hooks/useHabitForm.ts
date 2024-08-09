import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createHabit, editHabit } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";

import type { HabitRequestType } from "@/types/habit";
import { convertHabitRequestToHabitPostV2Request } from "@/mappers/convertHabitRequestToHabitPostV2Request";

interface UseHabitFormProps {
	habitId?: number;
	initialData?: HabitRequestType | null;
	isOnboarding?: boolean;
}

export const useHabitForm = ({ habitId, initialData, isOnboarding }: UseHabitFormProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [habitRequest, setHabitRequest] = useState<HabitRequestType>(
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
				await dispatch(createHabit(convertHabitRequestToHabitPostV2Request(habitRequest, isOnboarding))).unwrap();
				dispatch(openModal(modalType.SUCCESS_GUIDE));
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
