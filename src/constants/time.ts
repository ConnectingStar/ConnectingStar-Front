export const NOON_LIST = ["오전", "오후"];

export const HOUR_LIST = Array.from({ length: 12 }).map((_, index) => {
	if (index < 10) {
		return "0" + index;
	} else {
		return "" + index;
	}
});

export const MINUTE_LIST = Array.from({ length: 60 }).map((_, index) => {
	if (index < 10) {
		return "0" + index;
	} else {
		return "" + index;
	}
});
