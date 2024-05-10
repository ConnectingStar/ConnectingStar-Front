import { useState } from "react";

export const useToggleTrigger = () => {
	const [isToggle, setIsToggle] = useState(false);

	const handleToggle = (isToggle: boolean) => {
		setIsToggle(isToggle);
	};

	const handleTogglePrev = () => {
		setIsToggle((prev) => !prev);
	};

	return { isToggle, handleToggle, handleTogglePrev };
};
