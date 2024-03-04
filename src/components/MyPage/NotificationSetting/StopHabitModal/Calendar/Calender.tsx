import { useMemo, useState } from "react";

import { addMonths, subMonths, startOfMonth, startOfWeek, addDays, isSameMonth } from "date-fns";

import CalendarDay from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/CalendarDay";
import CalendarHeader from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/CalendarHeader";

import {
	dateBoxStyle,
	dayStyle,
} from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calendar.style";

const week = ["일", "월", "화", "수", "목", "금", "토"];

const Calender = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const monthStart = startOfMonth(currentMonth);
	const startDate = startOfWeek(monthStart);
	const dayList = Array.from({ length: 35 }, (_, index) => addDays(startDate, index));

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const handleDayText = useMemo(() => {
		return dayList.map((dayData) => {
			return (
				<CalendarDay
					key={dayData.toString()}
					day={dayData}
					isSameMonth={isSameMonth(monthStart, dayData)}
				/>
			);
		});
	}, [currentMonth]);

	return (
		<>
			<CalendarHeader
				currentMonth={currentMonth}
				onClickNextMonth={handleNextMonth}
				onClickPrevMonth={handlePrevMonth}
			/>

			<div css={dateBoxStyle}>
				{week.map((week) => (
					<div key={week} css={dayStyle()}>
						{week}
					</div>
				))}
				{handleDayText}
			</div>
		</>
	);
};

export default Calender;
