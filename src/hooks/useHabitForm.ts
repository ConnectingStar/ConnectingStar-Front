import { useCallback, useState } from "react";

import type { HabitRequestType } from "@/types/habit";

export const useHabitForm = () => {
	const [habitRequest, setHabitRequest] = useState({
		identity: "",
		runTime: { noon: "", hour: "", minute: "" },
		place: "",
		behavior: "",
		behaviorValue: 0,
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

	return { habitRequest, updateInputValue };
};
