import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createHabitRecord } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";

import type { HabitRecordRequestType } from "@/types/habit";

interface HabitRecordDataType {
	initialData: HabitRecordRequestType;
}

export const useHabitRecordForm = ({ initialData }: HabitRecordDataType) => {
	const dispatch = useAppDispatch();

	const [habitRecordRequest, setHabitRecordRequest] = useState(initialData);

	const navigate = useNavigate();

	const updateInputValue = useCallback(
		<Key extends keyof HabitRecordRequestType>(key: Key, value: HabitRecordRequestType[Key]) => {
			setHabitRecordRequest((prevHabitRecordRequest) => {
				const data = {
					...prevHabitRecordRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSubmit = async () => {
		try {
			await dispatch(createHabitRecord(habitRecordRequest)).unwrap();

			if (habitRecordRequest.isRest) {
				navigate(PATH.HOME);
			} else {
				dispatch(openModal(modalType.HABIT_RECORD_ACHIEVE));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRecordRequest, updateInputValue, handleSubmit };
};
