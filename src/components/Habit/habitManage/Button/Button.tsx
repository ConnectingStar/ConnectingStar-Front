import { useEffect, useState } from "react";

import type { AlarmData } from "@/constants/homeConstants";

import {
	layoutStyle,
	getToggleButtonStyle,
} from "@/components/Habit/habitManage/Button/Button.style";

interface buttonType {
	inputs: AlarmData;
	isToggle?: boolean;
	alarmCheck: (key: number) => void;
	alarmQuestion: (key: number) => void;
}

const Button = ({ inputs, isToggle, alarmCheck, alarmQuestion }: buttonType) => {
	const { key, title, time, comment, isActive } = inputs;
	const [toggleActive, setToggleActive] = useState(isActive);

	const handleToggleClick = () => {
		if (!toggleActive) {
			alarmCheck(key);
			setToggleActive((prev) => !prev);
		} else {
			alarmQuestion(key);
		}
	};
	useEffect(() => {
		if (!isActive) {
			setToggleActive(false);
		}
	}, [isActive]);

	return (
		<div css={layoutStyle}>
			<span>
				<h1>{title}</h1>
				<p>{time}</p>
			</span>
			<div>{comment}</div>

			{isToggle && (
				<div css={getToggleButtonStyle(isActive)} onClick={handleToggleClick}>
					<span />
				</div>
			)}
		</div>
	);
};

export default Button;
