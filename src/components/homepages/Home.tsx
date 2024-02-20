import { useEffect, useState } from "react";

import Advices from "@/components/homepages/Advices";
import Calender from "@/components/homepages/Calender";
import Habits from "@/components/homepages/Habits";
import HelpAnnouncement from "@/components/homepages/HelpAnnouncement";
import Profile from "@/components/homepages/Profile";
import { daysOfTheWeek } from "@/constants/homeConstants";
import { convertTimeGap } from "@/utils/homeUtils";

import { homeStyle } from "@/components/homepages/Home.style";

interface TargetDate {
	year: number;
	month: number;
	date: number;
	day: string;
	isPlanned: boolean;
}

function Home() {
	const today = new Date();
	const [targetDate, setTargetDate] = useState<TargetDate>({
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		date: today.getDate(),
		day: daysOfTheWeek[today.getDay()],
		isPlanned: false,
	});
	const [timeGap, setTimeGap] = useState<string>("오늘");
	useEffect(() => {
		const { year, month, date }: TargetDate = targetDate;
		// 오늘 시간, 시분 제외
		const currentDate: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		// targetDate 시분 제외
		const targetedDate: Date = new Date(`${year}.${month}.${date}`);
		const timeGapInMs: number = currentDate.getTime() - targetedDate.getTime();
		// 하루 단위의 시간차 계산
		const dateGap = Math.floor(timeGapInMs / (1000 * 60 * 60 * 24));
		setTimeGap(convertTimeGap(dateGap));
	}, [targetDate]);

	return (
		<div css={homeStyle.container}>
			<main css={homeStyle.innerWrapper}>
				<Profile />
				<HelpAnnouncement />
				<Advices />
				<Calender setTargetDate={setTargetDate} targetDate={targetDate} timeGap={timeGap} />
				<Habits targetDate={targetDate} />
			</main>
		</div>
	);
}

export default Home;
