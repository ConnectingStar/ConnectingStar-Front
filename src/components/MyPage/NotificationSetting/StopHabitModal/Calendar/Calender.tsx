import { useState, useCallback } from "react";

import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	startOfWeek,
	addDays,
	isSameMonth,
	isSameDay,
} from "date-fns";

import CalendarHeader from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/CalendarHeader";

import { WEEK } from "@/constants/calendarConstants";

import {
	dateBoxStyle,
	dayStyle,
} from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calendar.style";

const Calender = ({
	startDay,
	setStartDay,
	endDay,
	setEndDay,
}: {
	startDay: Date;
	setStartDay: React.Dispatch<React.SetStateAction<Date>>;
	endDay: Date;
	setEndDay: React.Dispatch<React.SetStateAction<Date>>;
}) => {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const [firstClick, setFirstClick] = useState(true);

	const monthStart = startOfMonth(currentMonth);
	const startDate = startOfWeek(monthStart);
	const dayList = Array.from({ length: 35 }, (_, index) => addDays(startDate, index));
	const nowMonth = new Date();

	const handlePrevMonth = useCallback(() => {
		if (currentMonth <= nowMonth) {
			setCurrentMonth(nowMonth);
		} else {
			setCurrentMonth(subMonths(currentMonth, 1));
		}
	}, [currentMonth]);

	const handleNextMonth = useCallback(() => {
		setCurrentMonth(addMonths(currentMonth, 1));
	}, [currentMonth]);

	const handleSelectRange = (dayData: Date) => {
		if (firstClick) {
			setStartDay(dayData);
			setFirstClick(false);
		} else {
			setEndDay(dayData);
			setFirstClick(true);
		}
	};

	const handleDayText = useCallback(() => {
		return dayList.map((dayData) => {
			return (
				<div
					key={dayData.toString()}
					css={dayStyle(
						isSameMonth(monthStart, dayData),
						false,
						isSameDay(startDay, dayData),
						isSameDay(endDay, dayData),
					)}
					onClick={() => handleSelectRange(dayData)}
				>
					<p>{format(dayData, "d")}</p>
				</div>
			);
		});
	}, [currentMonth]);

	return (
		<>
			<CalendarHeader
				currentMonth={currentMonth}
				onClickNextMonth={handleNextMonth}
				onClickPrevMonth={handlePrevMonth}
				disabledPrevMonth={currentMonth <= nowMonth}
			/>

			<div css={dateBoxStyle}>
				{WEEK.map((week) => (
					<div key={week} css={dayStyle(true, true)}>
						{week}
					</div>
				))}

				{handleDayText()}
			</div>
		</>
	);
};

export default Calender;
