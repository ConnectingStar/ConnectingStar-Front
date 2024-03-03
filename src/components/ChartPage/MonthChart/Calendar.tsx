import { useCallback } from "react";

import { format, startOfMonth, startOfWeek, addDays, isSameMonth } from "date-fns";

import { WEEK } from "@/constants/calendarConstants";

import { dateBoxStyle, dayStyle } from "@/components/ChartPage/MonthChart/Calendar.style";

const Calendar = ({ currentMonth }: { currentMonth: Date }) => {
	const monthStart = startOfMonth(currentMonth);
	const startDate = startOfWeek(monthStart);
	const dayList = Array.from({ length: 42 }, (_, index) => addDays(startDate, index));

	const handleDayText = useCallback(() => {
		return dayList.map((dayData) => {
			return (
				<div
					key={dayData.toString()}
					css={dayStyle(isSameMonth(monthStart, dayData), false, dayData.getDate())}
				>
					<p>{format(dayData, "d")}</p>
				</div>
			);
		});
	}, [currentMonth]);

	return (
		<div css={dateBoxStyle}>
			{WEEK.map((week) => (
				<div key={week} css={dayStyle(true, true)}>
					{week}
				</div>
			))}

			{handleDayText()}
		</div>
	);
};

export default Calendar;
