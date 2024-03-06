import { format } from "date-fns";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowDisabledIcon from "@/assets/icon/ic-calendar-right-arrow-disabled.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calendar-right-arrow.svg?react";

import {
	headerLayoutStyle,
	headerBoxStyle,
} from "@/components/ChartPage/MonthChart/MonthCalendar/MonthCalendar.style";

interface calendarHeaderType {
	currentMonth: Date;
	onClickPrevMonth: () => void;
	onClickNextMonth: () => void;
	disabledNextMonth: boolean;
}

const CalendarHeader = ({
	currentMonth,
	onClickPrevMonth,
	onClickNextMonth,
	disabledNextMonth,
}: calendarHeaderType) => {
	return (
		<div css={headerLayoutStyle}>
			<LeftArrowIcon onClick={onClickPrevMonth} />

			<div css={headerBoxStyle}>
				<h1>{format(currentMonth, "M")}월</h1>
				<p>{format(currentMonth, "yyyy")}년</p>
			</div>

			{disabledNextMonth ? (
				<RightArrowDisabledIcon />
			) : (
				<RightArrowIcon onClick={onClickNextMonth} />
			)}
		</div>
	);
};

export default CalendarHeader;
