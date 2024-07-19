import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createHabitRestRecord } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";

import { PATH } from "@/constants/path";

import type { HabitRestRecordRequestType } from "@/types/habit";

interface HabitRestRecordDataType {
	initialData: HabitRestRecordRequestType;
}

export const useHabitRestRecordForm = ({ initialData }: HabitRestRecordDataType) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [habitRestRecordRequest, setHabitRestRecordRequest] = useState(initialData);

	const updateInputValue = useCallback(
		<Key extends keyof HabitRestRecordRequestType>(
			key: Key,
			value: HabitRestRecordRequestType[Key],
		) => {
			setHabitRestRecordRequest((prevHabitRestRecordRequest) => {
				const data = {
					...prevHabitRestRecordRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSubmit = async () => {
		try {
			await dispatch(createHabitRestRecord(habitRestRecordRequest)).unwrap();
			navigate(PATH.HOME);
		} catch (error) {
			console.log(error);
		}
	};

	return { habitRestRecordRequest, updateInputValue, handleSubmit };
};
