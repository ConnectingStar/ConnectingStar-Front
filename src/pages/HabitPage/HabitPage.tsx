import { useEffect, useState } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Advices from "@/components/Habit/Landing/Advices/Advices";
import Calender from "@/components/Habit/Landing/Calendar/Calender";
import HabitHelp from "@/components/Habit/Landing/HabitHelp";
import Habits from "@/components/Habit/Landing/HabitList/HabitList";
import Profile from "@/components/Habit/Landing/Profile/Profile";
import { DateInfo } from "@/types/homeTypes";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

import { mainBoxStyle, mainTopBoxStyle } from "@/pages/HabitPage/HabitPage.style";

import { convertTimeGap } from "@/utils/homeUtils";

const HabitPage = () => {
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

		setTimeGap(convertTimeGap(dateGap));
	}, [selectedDate]);

	return (
		<>
			<main css={mainBoxStyle}>
				<div css={mainTopBoxStyle}>
					<Profile />
					<HabitHelp />
					<Advices />
				</div>
				<Calender setSelectedDate={setSelectedDate} selectedDate={selectedDate} timeGap={timeGap} />
				<Habits selectedDate={selectedDate} />
			</main>
			<Gnb />
		</>
	);
};

export default HabitPage;
