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
