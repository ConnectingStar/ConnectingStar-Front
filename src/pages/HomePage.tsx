import { useEffect, useState, ReactNode } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Advices from "@/components/homepages/Advices";
import Calender from "@/components/homepages/Calender";
import Habits from "@/components/homepages/Habits";
import HelpAnnouncement from "@/components/homepages/HelpAnnouncement";
import Profile from "@/components/homepages/Profile";

import { homePageStyle } from "@/pages/HomePage.style";

interface TargetDate {
	year: number;
	month: number;
	day: number;
	DOTW: string;
	isPlanned: boolean;
}

export default function HomePage() {
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
		const currentDate: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		// targetDate 시분 제외
		const targetedDate: Date = new Date(`${year}.${month}.${day}`);
		const timeDiffInMs: number = currentDate.getTime() - targetedDate.getTime();
		// 하루 단위의 시간차 계산
		const daysDiff = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24));
		setTimeDiff(convertTimeDiff(daysDiff));
	}, [targetDate]);

	return (
		<HomePage.Container>
			<HomePage.InnerWrapper>
				<Profile />
				<HelpAnnouncement />
				<Advices />
				<Calender setTargetDate={setTargetDate} targetDate={targetDate} timeDiff={timeDiff} />
				<Habits targetDate={targetDate} />
			</HomePage.InnerWrapper>
			<Gnb />
		</HomePage.Container>
	);
}

HomePage.Container = function ({ children }: { children: ReactNode }) {
	return <div css={homePageStyle.container}>{children}</div>;
};

HomePage.InnerWrapper = function ({ children }: { children: ReactNode }) {
	return <main css={homePageStyle.innerWrapper}>{children}</main>;
};
