import { dateFormat } from "@/utils/dateFormat";
import { convertFromTimeString } from "@/utils/time";

import type { HabitOneDayTypeWithStatus } from "@/types/habit";

import { layoutStyle, textStyle } from "@/components/MyPage/HabitHistory/HabitCard/HabitCard.style";

interface HabitCardProps {
	habitData: HabitOneDayTypeWithStatus;
}

const HabitCard = ({ habitData }: HabitCardProps) => {
	return (
		<div css={layoutStyle}>
			<h1>
				{`${convertFromTimeString(habitData.runTime)?.split(" ")[0]} ${convertFromTimeString(habitData.runTime)?.split(" ")[1].split(":")[0]}시 ${convertFromTimeString(habitData.runTime)?.split(" ")[1].split(":")[1]}분에 ${habitData.place}에서 ${habitData.action} ${habitData.value} ${habitData.unit}`}
			</h1>

			<p css={textStyle}>
				<span>시작일 : {dateFormat(new Date(habitData.createdAt), "POINT")}</span>
				<span>실천 : {habitData.historyCountByStatus.completedCount}</span>
				<span>휴식 : {habitData.historyCountByStatus.restCount}</span>
			</p>
		</div>
	);
};

export default HabitCard;
