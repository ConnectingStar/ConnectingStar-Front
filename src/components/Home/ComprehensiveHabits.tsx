import { ReactNode, useEffect, useState } from "react";

import { css } from "@emotion/react";

import { ComprehensiveHabitsStyle } from "./ComprehensiveHabits.style.ts";
import Calender from "./ComprehensiveHabitsDetail/Calender.tsx";
import Habits from "./ComprehensiveHabitsDetail/Habits.tsx";

export interface TargetDate {
	year: number;
	month: number;
	day: number;
	DOTW: string;
	isPlanned: boolean;
}

function ComprehensiveHabits(): ReactNode {
	const today = new Date();

	const DOTW = today.getDay();
	const daysOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
	const [targetDate, setTargetDate] = useState<TargetDate>({
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
		DOTW: daysOfTheWeek[DOTW],
		isPlanned: false,
	});
	const [timeDiff, setTimeDiff] = useState<string>("오늘");

	// 현재 시각과 타겟 시각의 차를 계산, 7일 미만이면 일, 30일 미만이면 주, 365일 미만이면 년으로 차이 설정
	const convertTimeDiff = (diff: number): string => {
		let abs = Math.abs(diff);
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
		if (diff > 0) return `${abs}${unit} 전`;
		if (diff < 0) return `${abs}${unit} 후`;

		return "오늘";
	};
	// 타겟 시각이 변할 때마다 현재 시각과의 차를 계산 다시 설정 timeDiff를 다시 설정
	useEffect(() => {
		const { year, month, day }: TargetDate = targetDate;
		// 오늘 시간, 시분 제외
		const CD: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		// targetDate 시분 제외
		const TD: Date = new Date(`${year}.${month}.${day}`);
		const timeDiffInMs: number = CD.getTime() - TD.getTime();
		// 하루 단위의 시간차 계산
		const daysDiff = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24));
		setTimeDiff(convertTimeDiff(daysDiff));
	}, [targetDate]);

	return (
		<section
			css={css`
				${ComprehensiveHabitsStyle.container}
			`}
		>
			<Calender setTargetDate={setTargetDate} targetDate={targetDate} timeDiff={timeDiff} />
			<Habits targetDate={targetDate} />
		</section>
	);
}

export default ComprehensiveHabits;
