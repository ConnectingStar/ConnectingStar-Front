export const convertTimeGap = (gap: number): string => {
	let abs = Math.abs(gap);
	let unit = "일";
	if (abs < 7) {
		unit = "일";
	} else if (abs < 30) {
		unit = "주";
		abs = Math.floor(abs / 7);
	} else if (abs < 365) {
		unit = "달";
		abs = Math.floor(abs / 30);
	} else {
		unit = "년";
		abs = Math.floor(abs / 365);
	}
	if (gap > 0) return `${abs}${unit} 전`;
	if (gap < 0) return `${abs}${unit} 후`;

	return "오늘";
};

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
