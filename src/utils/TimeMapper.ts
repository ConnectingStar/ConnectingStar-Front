export const TimeMapper = (
	from: string | number,
	total: number | undefined,
	length: number,
	type: "upper" | "lower",
) => {
	let answer = ["ERROR"];
	if (!total) {
		return answer;
	}
	if (type === "upper") {
		answer = Array.from({ length: length })
			.map((_, idx) => {
				const limit = total <= 24 ? 1 : 0;
				if (+from - (idx + 1) < limit) {
					return `${total + (+from - (idx + 1)) < 10 ? "0" : ""}${total + (+from - (idx + 1))}`;
				} else {
					return `${+from - (idx + 1) < 10 ? "0" : ""}${+from - (idx + 1)}`;
				}
			})
			.reverse();
		return answer;
	} else if (type === "lower") {
		answer = Array.from({ length: 6 }).map((_, idx) => {
			// 시, 분에 따라 업데이트되는 요소들 변경
			const limit = total <= 24 ? total - 1 : total - 2;
			if (+from - 1 + (idx + 1) > limit) {
				return `${+from + (idx + 1) - total < 10 ? "0" : ""}${+from + (idx + 1) - total}`;
			} else {
				return `${+from + (idx + 1) < 10 ? "0" : ""}${+from + (idx + 1)}`;
			}
		});
	}
	return answer;
};
