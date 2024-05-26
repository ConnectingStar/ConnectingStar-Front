import { useCallback, useState } from "react";

import type { HabitRequestType } from "@/types/habit";

export const useHabitForm = () => {
	const [habitRequest, setHabitRequest] = useState({
		identity: "",
		runTime: { noon: "오전", hour: "10", minute: "00" },
		place: "",
		behavior: "",
		behaviorValue: 0,
		behaviorUnit: "",
		firstAlert: { noon: "오전", hour: "09", minute: "50" },
		secondAlert: { noon: "오전", hour: "10", minute: "10" },
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

	return { habitRequest, updateInputValue };
};
