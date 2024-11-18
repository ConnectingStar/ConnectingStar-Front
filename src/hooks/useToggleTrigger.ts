import { useState } from "react";

export const useToggleTrigger = ({ toggle }: { toggle?: boolean }) => {
	const [isToggle, setIsToggle] = useState(toggle ?? false);

	const handleToggle = (isToggle: boolean) => {
		setIsToggle(isToggle);
	};

	const handleTogglePrev = () => {
		setIsToggle((prev) => !prev);
	};

	return { isToggle, handleToggle, handleTogglePrev };
};
