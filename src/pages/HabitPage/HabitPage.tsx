import { useEffect, useState } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import HabitAdviceBanner from "@/components/Habit/HabitAdviceBanner/HabitAdviceBanner";
import HabitGuideBanner from "@/components/Habit/HabitGuideBanner/HabitGuideBanner";
import Calender from "@/components/Habit/Landing/Calendar/Calender";
import Habits from "@/components/Habit/Landing/HabitList/HabitList";
import Profile from "@/components/Habit/Profile/Profile";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

import { convertTimeGap } from "@/utils/homeUtils";

import { mainBoxStyle, mainTopBoxStyle } from "@/pages/HabitPage/HabitPage.style";

import type { DateInfo } from "@/types/homeTypes";

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

	const handleSelectedDate = (date: DateInfo) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		const From = new Date(year, month, date);
		const To = new Date(`${selectedDate.year}.${selectedDate.month}.${selectedDate.date}`);
		const timeGapInMs = From.getTime() - To.getTime();
		const dateGap = Math.floor(timeGapInMs / msPerDay);

		setTimeGap(convertTimeGap(dateGap));
	}, [selectedDate]);

	return (
		<>
			<main css={mainBoxStyle}>
				<div css={mainTopBoxStyle}>
					<Profile />
					<HabitGuideBanner />
					<HabitAdviceBanner />
				</div>
				<Calender
					handleSelectedDate={handleSelectedDate}
					selectedDate={selectedDate}
					timeGap={timeGap}
				/>
				<Habits selectedDate={selectedDate} />
			</main>
			<Gnb />
		</>
	);
};

export default HabitPage;
