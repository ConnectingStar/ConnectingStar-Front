import { format } from "date-fns";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calender-right-arrow.svg?react";

import {
	headerLayoutStyle,
	headerBoxStyle,
} from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calendar.style";

interface calendarHeaderType {
	currentMonth: Date;
	onClickPrevMonth: () => void;
	onClickNextMonth: () => void;
}

const CalendarHeader = ({
	currentMonth,
	onClickPrevMonth,
	onClickNextMonth,
}: calendarHeaderType) => {
	return (
		<div css={headerLayoutStyle}>
			<LeftArrowIcon onClick={onClickPrevMonth} />
			<div css={headerBoxStyle}>
				<h1>{format(currentMonth, "M")}월</h1>
				<p>{format(currentMonth, "yyyy")}년</p>
			</div>
			<RightArrowIcon onClick={onClickNextMonth} />
		</div>
	);
};

export default CalendarHeader;
