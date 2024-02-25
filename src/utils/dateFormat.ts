export const dateFormat = (date: Date) => {
	let formatMonth = String(date.getMonth() + 1);
	let formatDay = String(date.getDate());

	if (Number(formatMonth) < 10) {
		formatMonth = `0${formatMonth}`;
	}

	if (Number(formatDay) < 10) {
		formatDay = `0${formatDay}`;
	}

	return `${date.getFullYear()}.${formatMonth}.${formatDay}`;
};
