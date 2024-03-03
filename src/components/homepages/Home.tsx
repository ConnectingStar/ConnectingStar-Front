import { useEffect, useState } from "react";

import Advices from "@/components/homepages/Advices";
import Calender from "@/components/homepages/Calender";
import Habits from "@/components/homepages/Habits";
import HelpAnnouncement from "@/components/homepages/HelpAnnouncement";
import Profile from "@/components/homepages/Profile";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

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
	const { year, month, date, day } = currentDate;
	const [targetDate, setTargetDate] = useState<TargetDate>({
		year,
		month: month + 1,
		date,
		day: daysOfTheWeek[day],
		isPlanned: false,
	});
	const [timeGap, setTimeGap] = useState<string>("오늘");
	useEffect(() => {
		// 오늘 시간, 시분 제외
		const From: Date = new Date(year, month, date);
		// targetDate 시분 제외
		const To: Date = new Date(`${targetDate.year}.${targetDate.month}.${targetDate.date}`);
		const timeGapInMs: number = From.getTime() - To.getTime();
		// 하루 단위의 시간차 계산
		const dateGap = Math.floor(timeGapInMs / msPerDay);
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
