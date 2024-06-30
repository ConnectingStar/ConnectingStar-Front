import { useCallback, useState } from "react";

import type { HabitRecordRequestType } from "@/types/habit";

interface HabitRecordDataType {
	initialData: HabitRecordRequestType;
}

export const useHabitRecordForm = ({ initialData }: HabitRecordDataType) => {
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

	return { habitRecordRequest, updateInputValue };
};
