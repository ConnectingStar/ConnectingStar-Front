import { WEEK } from "@/constants/calendar";

import type { DateFormatType } from "@/types/common";

export const dateFormat = (date: Date, type: DateFormatType) => {
	let formatMonth = String(date.getMonth() + 1);
	let formatDay = String(date.getDate());

	if (Number(formatMonth) < 10) {
		formatMonth = `0${formatMonth}`;
	}

	if (Number(formatDay) < 10) {
		formatDay = `0${formatDay}`;
	}

	if (type === "LINE") {
		return `${date.getFullYear()}-${formatMonth}-${formatDay}`;
	}

	return `${date.getFullYear()}.${formatMonth}.${formatDay}`;
};

export const weekFormat = (date: Date) => {
	return WEEK[date.getDay()];
};
