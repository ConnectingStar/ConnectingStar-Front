import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Advices from "@/components/Home/Landing/Advices/Advices";
import Calender from "@/components/Home/Landing/Calendar/Calender";
import HabitHelp from "@/components/Home/Landing/HabitHelp";
import Habits from "@/components/Home/Landing/HabitList/HabitList";
import Profile from "@/components/Home/Landing/Profile/Profile";
import { DateInfo } from "@/types/homeTypes";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

import { convertTimeGap } from "@/utils/homeUtils";

function Home() {
	const { year, month, date, day } = currentDate;

	const [selectedDate, setSelectedDate] = useState<DateInfo>({
		year,
		month: month + 1,
		date,
		day: daysOfTheWeek[day],
		isPlanned: false,
	});

	const [timeGap, setTimeGap] = useState<string>("오늘");

	useEffect(() => {
		const From: Date = new Date(year, month, date);
		const To: Date = new Date(`${selectedDate.year}.${selectedDate.month}.${selectedDate.date}`);
		const timeGapInMs: number = From.getTime() - To.getTime();
		const dateGap = Math.floor(timeGapInMs / msPerDay);

		// console.log(From);
		// console.log(To);
		// console.log(timeGapInMs);
		// console.log(dateGap);

		setTimeGap(convertTimeGap(dateGap));
	}, [selectedDate]);

	return (
		<main css={layoutStyle}>
			<div css={topBoxStyle}>
				<Profile />
				<HabitHelp />
				<Advices />
			</div>
			<Calender setSelectedDate={setSelectedDate} selectedDate={selectedDate} timeGap={timeGap} />
			<Habits selectedDate={selectedDate} />
		</main>
	);
}

export default Home;

const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem 3.5rem;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const topBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
