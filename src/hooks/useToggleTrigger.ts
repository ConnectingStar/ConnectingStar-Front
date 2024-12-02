import { useState } from "react";

import type { HabitRequestV2Type } from "@/types/habit";

interface UseToggleTriggerProps {
	toggle?: boolean;
	updateInputValue?: <Key extends keyof HabitRequestV2Type>(
		key: Key,
		value: HabitRequestV2Type[Key],
	) => void;
	isFirst?: boolean;
	isPause?: boolean;
}

export const useToggleTrigger = ({
	toggle,
	updateInputValue,
	isFirst,
	isPause,
}: UseToggleTriggerProps) => {
	const [isToggle, setIsToggle] = useState(toggle ?? isPause ? false : true);

	const handleToggle = (isToggle: boolean) => {
		setIsToggle(isToggle);
	};

	const handleTogglePrev = () => {
		setIsToggle((prev) => !prev);
		updateInputValue &&
			isToggle === false &&
			updateInputValue(isFirst ? "firstAlertStatus" : "secondAlertStatus", String("true"));
	};

	return { isToggle, handleToggle, handleTogglePrev };
};
