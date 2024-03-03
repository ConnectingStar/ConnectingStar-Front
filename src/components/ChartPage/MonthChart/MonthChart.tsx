import { useState, useCallback } from "react";

import { addMonths, subMonths } from "date-fns";

import CalendarHeader from "@/components/ChartPage/MonthChart/CalendarHeader";

import { layoutStyle, boxStyle } from "@/components/ChartPage/MonthChart/MonthChart.style";

const MonthChart = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [nowMonth] = useState(new Date());

	const handlePrevMonth = useCallback(() => {
		setCurrentMonth(subMonths(currentMonth, 1));
	}, [currentMonth]);

	const handleNextMonth = useCallback(() => {
		if (currentMonth >= nowMonth) {
			setCurrentMonth(nowMonth);
		} else {
			setCurrentMonth(addMonths(currentMonth, 1));
		}
	}, [currentMonth]);

	return (
		<div css={layoutStyle}>
			<div css={boxStyle}>
				<CalendarHeader
					currentMonth={currentMonth}
					onClickNextMonth={handleNextMonth}
					onClickPrevMonth={handlePrevMonth}
					disabledNextMonth={currentMonth >= nowMonth}
				/>
			</div>
		</div>
	);
};

export default MonthChart;
