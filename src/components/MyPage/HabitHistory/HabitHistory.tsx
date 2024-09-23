import EndHabitCard from "@/components/MyPage/HabitHistory/EndHabitCard/EndHabitCard";
import HabitCard from "@/components/MyPage/HabitHistory/HabitCard/HabitCard";

import type { EndHabitType, HabitOneDayTypeWithStatus } from "@/types/habit";

import { dividerStyle, cardBoxStyle } from "@/components/MyPage/HabitHistory/HabitHistory.style";

interface HabitHistoryProps {
	tab: string;
	habitData: HabitOneDayTypeWithStatus[];
	endHabitData: EndHabitType[];
}

const HabitHistory = ({ tab, habitData, endHabitData }: HabitHistoryProps) => {
	return (
		<>
			<div css={dividerStyle} />
			<div css={cardBoxStyle}>
				{tab === "실천 중" &&
					habitData.map((habit) => <HabitCard key={habit.runHabitId} habitData={habit} />)}
				{tab === "지난" &&
					endHabitData.map((habit) => <EndHabitCard key={habit.quitHabitId} habitData={habit} />)}
			</div>
		</>
	);
};

export default HabitHistory;
