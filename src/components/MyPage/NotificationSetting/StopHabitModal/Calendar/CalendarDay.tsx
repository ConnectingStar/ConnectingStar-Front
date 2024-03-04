import { format } from "date-fns";

import { dayStyle } from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calendar.style";

interface calendarDayType {
	day: Date;
	isSameMonth: boolean;
}

const CalendarDay = ({ day, isSameMonth }: calendarDayType) => {
	return <div css={dayStyle(isSameMonth)}>{format(day, "d")}</div>;
};

export default CalendarDay;
