import { useCallback, useState } from "react";

import { createHabitRecord } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import type { HabitRecordRequestType } from "@/types/habit";

interface HabitRecordDataType {
	initialData: HabitRecordRequestType;
}

export const useHabitRecordForm = ({ initialData }: HabitRecordDataType) => {
	const dispatch = useAppDispatch();

	const [habitRecordRequest, setHabitRecordRequest] = useState(initialData);

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
			dispatch(openModal(modalType.STAR_PRIZE));
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRecordRequest, updateInputValue, handleSubmit };
};
