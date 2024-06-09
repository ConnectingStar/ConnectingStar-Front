const daysOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

export const renderDates = (
	year: number,
	month: number,
	date: number,
	length: number,
	direction: boolean,
) => {
	const rendered = Array.from({ length: length }).map((_, idx) => {
		const delta = direction ? idx + 1 : -(idx + 1);
		const EachDate = new Date(+year, +month, +date + delta);
		return {
			year: EachDate.getFullYear(),
			month: EachDate.getMonth() + 1,
			date: EachDate.getDate(),
			day: daysOfTheWeek[EachDate.getDay()],
			isPlanned: false,
		};
	});
	return direction ? rendered : rendered.reverse();
};

const today = new Date();
export const isNextDates = (year: number, month: number, date: number) => {
	return today.getTime() < new Date(year, month - 1, date).getTime();
};
