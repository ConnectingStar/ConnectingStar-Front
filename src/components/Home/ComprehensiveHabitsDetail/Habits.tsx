import { ReactNode, useEffect, useState } from "react";

import { css } from "@emotion/react";

import { TargetDate } from "../ComprehensiveHabits";

import { HabitsStyle } from "./Habits.style";

interface HabitsProps {
	targetDate: TargetDate;
}
interface HabitsObj {
	status: "none" | "checked" | "rest";
	article: string;
}

function Habits({ targetDate }: HabitsProps): ReactNode {
	const [targetHabits, setTargetHabits] = useState<HabitsObj[]>([
		{
			status: "none",
			article: "",
		},
	]);
	useEffect(() => {
		setTargetHabits(targetHabits);
	}, [targetDate]);
	return (
		<div
			css={css`
				${HabitsStyle.container}
			`}
		></div>
	);
}

export default Habits;
