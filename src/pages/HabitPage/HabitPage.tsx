import { useEffect, useState } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import HabitAdviceBanner from "@/components/Habit/HabitAdviceBanner/HabitAdviceBanner";
import HabitGuideBanner from "@/components/Habit/HabitGuideBanner/HabitGuideBanner";
import Calender from "@/components/Habit/Landing/Calendar/Calender";
import Habits from "@/components/Habit/Landing/HabitList/HabitList";
import Profile from "@/components/Habit/Profile/Profile";

import { getProgressHabitList, getHabitHistoryList } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { daysOfTheWeek, currentDate, msPerDay } from "@/constants/homeConstants";

import { convertTimeGap } from "@/utils/homeUtils";

import { mainBoxStyle, mainTopBoxStyle } from "@/pages/HabitPage/HabitPage.style";

import type { DateInfo } from "@/types/homeTypes";

const HabitPage = () => {
	const dispatch = useAppDispatch();

	const { progressHabitList, habitHistoryList } = useAppSelector((state) => state.habit);

	console.log(progressHabitList);
	console.log(habitHistoryList);

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

	useEffect(() => {
		dispatch(getProgressHabitList());
		dispatch(getHabitHistoryList({ runHabitId: 38, increase: true, isRest: false }));
	}, []);

	return (
		<>
			<main css={mainBoxStyle}>
				<Profile />
				<div css={mainTopBoxStyle}>
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
