import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Advices from "@/components/Home/Advices";
import Calender from "@/components/Home/Calender";
import HabitHelp from "@/components/Home/HabitHelp";
import Habits from "@/components/Home/Habits";
import Profile from "@/components/Home/Profile";
import { DateInfo } from "@/types/homeTypes";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

import { convertTimeGap } from "@/utils/homeUtils";

function Home() {
	const { year, month, date, day } = currentDate;
	const [targetDate, setTargetDate] = useState<DateInfo>({
		year,
		month: month + 1,
		date,
		day: daysOfTheWeek[day],
		isPlanned: false,
	});
	const [timeGap, setTimeGap] = useState<string>("오늘");
	useEffect(() => {
		const From: Date = new Date(year, month, date);
		const To: Date = new Date(`${targetDate.year}.${targetDate.month}.${targetDate.date}`);
		const timeGapInMs: number = From.getTime() - To.getTime();
		const dateGap = Math.floor(timeGapInMs / msPerDay);
		setTimeGap(convertTimeGap(dateGap));
	}, [targetDate]);

	return (
		<main css={homeStyle}>
			<Profile />
			<HabitHelp />
			<Advices />
			<Calender setTargetDate={setTargetDate} targetDate={targetDate} timeGap={timeGap} />
			<Habits targetDate={targetDate} />
		</main>
	);
}

export default Home;

const homeStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem;
`;
