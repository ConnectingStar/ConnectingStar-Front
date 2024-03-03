import { useCallback } from "react";

import { format, startOfMonth, startOfWeek, addDays, isSameMonth } from "date-fns";

import { dateBoxStyle, dayStyle } from "@/components/ChartPage/MonthChart/Calendar.style";

const week = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({ currentMonth }: { currentMonth: Date }) => {
	const monthStart = startOfMonth(currentMonth);
	const startDate = startOfWeek(monthStart);
	const dayList = Array.from({ length: 42 }, (_, index) => addDays(startDate, index));

	const handleDayText = useCallback(() => {
		return dayList.map((dayData) => {
			return (
				<div key={dayData.toString()} css={dayStyle(isSameMonth(monthStart, dayData), false)}>
					<p>{format(dayData, "d")}</p>
				</div>
			);
		});
	}, [currentMonth]);

	return (
		<div css={dateBoxStyle}>
			{week.map((week) => (
				<div key={week} css={dayStyle(true, true)}>
					{week}
				</div>
			))}

			{handleDayText()}
		</div>
	);
};

export default Calendar;
