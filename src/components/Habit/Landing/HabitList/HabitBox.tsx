import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import { habitArticleStyle } from "@/components/Habit/Landing/HabitList/HabitList.style";

interface HabitBoxProps {
	habitState?: "" | "complete" | "rest" | "end";
	text: string;
	handleHabitCheck: (text: string) => void;
	handleHabitModify: () => void;
}

function HabitBox({ habitState, text, handleHabitCheck, handleHabitModify }: HabitBoxProps) {
	return (
		<div css={habitArticleStyle(habitState)}>
			<div onClick={() => handleHabitCheck(text)}>
				{habitState === "" && <CheckIcon />}
				{habitState === "complete" && <BlueCheckIcon />}
				{habitState === "rest" && <span>휴식</span>}
				<p>{text}</p>
			</div>

			<button onClick={() => handleHabitModify()}>
				<TabIcon />
			</button>
		</div>
	);
}

export default HabitBox;
